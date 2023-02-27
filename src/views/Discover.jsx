import React from 'react';
import {useState,useEffect} from "react";
import { Discover_URL ,img_url} from '../api';
import Card from '../components/ItemCard';
import {Link} from "react-router-dom";
import ButtonCard from '../components/IconButtons/ButtonCard';
import BookmarkCard from '../components/IconButtons/BookmarkCard';


function Discover(props) {
  const [data, setData] = useState([]);
  const [subData, setSubData] = useState([]);
  let wishList = [];
  
  useEffect(() => {
    const URL =Discover_URL ;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  
  console.log("data",data.results);
  var wishListData
  const addToWishList = (id)=>{
    wishListData = data.results.find(item => item.id === id);
    wishList.push(wishListData);
    setSubData((wishList)=>wishList.concat(wishListData));
    console.log(subData);

  }

  useEffect(() => {
    localStorage.setItem("myWishList", JSON.stringify(subData));
    console.log("added successfully", subData);
    
  }, [subData]);

  
  console.log(wishListData);
  return (
    <>
      <h2>Discover</h2>
      
      <div className="container-fluid row ">
      {   
        data?.results?.map((item,index)=>(
          console.log(item),
          <div key={index} className="col-sm-4 mb-2">
            <div className="card" style={{  width: "2rem" ,backgroundColor:"#ecf0f1"}}>
              <button onClick={()=>{ addToWishList(item.id)}}>
              <ButtonCard/> 
              </button>
              <button onClick={()=>{ addToWishList(item.id)}}>
              <BookmarkCard/> 
              </button>
            </div>
            <Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}><Card img={`${img_url}${item.poster_path}`} title={item.title} overview={item.overview} id={item.id}/></Link>
            {console.log(img_url+item.poster_path)}
        </div>
       
        ))
      }
      </div>
     
      <div className="b-example-divider my-5">
        <div className="container-fluid row ">
          <h2>WishList</h2>
          <div> 
            { subData.map((item, index)=>(
              console.log(["id"]),
              <div key={index} className="col-sm-4 mb-2">
                <Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}><Card img={`${img_url}${item.poster_path}`} title={item.title} overview={item.overview} id={item.id}/></Link>
                {console.log(img_url+item.poster_path)}
            </div>))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;