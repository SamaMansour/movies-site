import React from 'react';
import {useState,useEffect} from "react";
import { Discover_URL ,img_url} from '../api';
import Card from '../components/ItemCard';
import {Link} from "react-router-dom";
import MovieCard from '../components/MovieCard/MovieCard';

function Discover(props) {
  const [data, setData] = useState([]);
  

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
      
      <div className="container-fluid row ">
      
      {
        
        data?.results?.map((item,index)=>(
          console.log(item),
          <div key={index} className="col-sm-4 mb-2">
            <MovieCard/>
          <Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}><Card img={`${img_url}${item.poster_path}`} title={item.title} overview={item.overview} id={item.id}/></Link>
         {console.log(img_url+item.poster_path)}
         
        </div>
         
        ))
      }
    
      </div>
     
    </>
  );
}

export default Discover;