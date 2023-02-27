import React, { useEffect, useState } from 'react'
import SearchBox from '../components/SearchBox/SearchBox';
import Discover from './Discover';


const Home = (props) => {
  const [query, setQuery] = useState("");
  const [data,setData]=useState();
  const search_URL=`https://api.themoviedb.org/3/search/movie?api_key=d3fea0d49f7035466ab4c90405575aa0&language=en-US&query=${query}&page=1&include_adult=false`;
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(search_URL)
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
    console.log(data)
  }

  function handleChange(e) {
    setQuery(e.target.value);
    console.log("query",query);
  }
  return (
    <>
    <SearchBox/>
    <Discover/>
    <div className="b-example-divider my-5">
     
    </div>
    </>
  );
}

export default Home