import React from 'react';
import {useState,useEffect} from "react";
import { Discover_URL ,img_url} from '../api';
import Card from '../components/ItemCard';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import sliderSettings from '../components/Slider';
import Heart from "react-heart";
import ButtonCard from '../components/IconButtons/ButtonCard';


function Discover(props) {
  const [data, setData] = useState([]);
  const [wishList, setWishList] = useState([]);
  

  useEffect(() => {
    const URL =Discover_URL ;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  
  console.log("data",data.results);

  const addToWishList = (id)=>{
    const wishListData = data.results.find(item => item.id === id);
    setWishList(wishListData);
    console.log(wishListData);

  }
  return (
    <>
      <h2>Discover</h2>
      <div className="container-fluid row ">
        {/* <Slider {...sliderSettings}> */}
      {   
        data?.results?.map((item,index)=>(
          console.log(item),
          <div key={index} className="col-sm-4 mb-2">
            <div className="card" style={{  width: "2rem" ,backgroundColor:"#ecf0f1"}}>
              {/* <ButtonCard/> */}
            </div>
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