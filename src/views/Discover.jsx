import React from 'react';
import {useState,useEffect} from "react";
import { Discover_URL ,img_url} from '../api';
import Card from '../components/ItemCard';
import {Link} from "react-router-dom";
import MovieCard from '../components/MovieCard/MovieCard';
import Slider from "react-slick";
import sliderSettings from '../components/Slider';

function Discover(props) {
  const [data, setData] = useState([]);
  const [wishItem, setWishItem] = useState("");
  const [wishList, setWishList] = useState([]);


  const handleWishAdd = (id, item) => {
    const newItem = { id: id,  item: item};
    setWishList((wishList) => wishList.concat(newItem));
    
    console.log(wishList);
  };

  useEffect(() => {
    if (wishList.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishList));
    }
  }, [wishList]);

  

  

  useEffect(() => {
    const URL =Discover_URL ;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  
  console.log("data",data.results);
  return (
    <>
      <h2>Discover</h2>
      <div className="container-fluid row ">
        {/* <Slider {...sliderSettings}> */}
      {
        
        data?.results?.map((item,index)=>(
          console.log(item),
          <div key={index} className="col-sm-4 mb-2">
            <button onClick={() => {handleWishAdd(item.id, item)}}>Add to Fav</button>
          <Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}><Card img={`${img_url}${item.poster_path}`} title={item.title} overview={item.overview} id={item.id}/></Link>
         {console.log(img_url+item.poster_path)}
         
        </div>
         
        ))
      }
      {/* </Slider> */}
    
      </div>
     
    </>
  );
}

export default Discover;