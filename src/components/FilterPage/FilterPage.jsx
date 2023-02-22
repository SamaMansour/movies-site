import React from 'react';
import { useQuery } from 'react-query';
import { Button, ButtonGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box
} from '@chakra-ui/react';
import { fetchSort, fetchSortFilterDiscover,img_url} from '../../api';
import MovieCard from '../MovieCard/MovieCard';
import ItemCard from '../ItemCard';

function FilterPage(props) {
    const [genre_id, setGenre_id] = useState([]);
    const [dateTo, setDateTo] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [data, setData] = useState(false);
    const filtered=[];
    const [sliderValue, setSliderValue] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
   
      const sortQueryDiscover = useQuery(
        ["SortData", dateTo,dateFrom,genre_id],
        () => fetchSort(dateTo, dateFrom, genre_id, sliderValue),
        {
          retry: false,
        }
      );

    function handleSearch(){
      setTimeout(()=>console.log("data=",sortQueryDiscover.data.data.results),
      200)
      console.log("query=",sortQueryDiscover)
      setData(true);

    }
    const dataResults=sortQueryDiscover?.data?.data?.results;



  if(!data){return (<>
    <div className='col-sm-8'>
      <div className=" d-flex flex-column">
        <h3 className="mt-3">Filter By</h3>
        <Box pt={6} pb={2}>
      <Slider id='slider'
      defaultValue={5}
      min={0}
      max={10}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}>
        <SliderMark value={0} {...labelStyles}>
          0
        </SliderMark>
        <SliderMark value={5} {...labelStyles}>
          5
        </SliderMark>
        <SliderMark value={10} {...labelStyles}>
          10
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  
        <label htmlFor="text" className="mt-3">
          From:
        </label>
        <input type="date" onChange={(e) => setDateTo(e.target.value)} />
        <label htmlFor="text" className="mt-3">
          To:
        </label>
        <input type="date" onChange={(e) => setDateFrom(e.target.value)} />
      </div>

      <ButtonGroup size="sm" className="mt-2">
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={28}
          style={{backgroundColor:"#9c88ff"}}
        >
          Action
        </Button>
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={12}
          style={{backgroundColor:"#9c88ff"}}
        >
          Adventure
        </Button>
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={35}
          style={{backgroundColor:"#9c88ff"}}
        >
          Comedy
        </Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={10749}
          style={{backgroundColor:"#9c88ff"}}
        >
          Romance
        </Button>
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={18}
          style={{backgroundColor:"#9c88ff"}}
        >
          Drama
        </Button>
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={80}
          style={{backgroundColor:"#9c88ff"}}
        >
          Crime
        </Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={27}
          style={{backgroundColor:"#9c88ff"}}
        >
          Horror
        </Button>
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={878}
          style={{backgroundColor:"#9c88ff"}}
        >
          Science Fiction
        </Button>
        <Button
          className="m-2"
          variant="light"
          onClick={(e) => setGenre_id(e.target.value)}
          value={10752}
          style={{backgroundColor:"#9c88ff"}}

        >
          War
        </Button>
      </ButtonGroup>

      <Button
        className="m-2"
        variant="secondary"
        size="sm"
        onClick={handleSearch}
        style={{backgroundColor:"#130f40"}}
      >

        Search
      </Button>
     
      </div>
      <h3>Results:</h3>
  </>);
  }
  if(data){
    return(<>
   
    <div className=" d-flex flex-column">
      <h3 className="mt-3">Filter By</h3>
      <label htmlFor="text" className="mt-3">
        From:
      </label>
      <input type="date" onChange={(e) => setDateTo(e.target.value)} />
      <label htmlFor="text" className="mt-3">
        To:
      </label>
      <input type="date" onChange={(e) => setDateFrom(e.target.value)} />
    </div>

    <ButtonGroup size="sm" className="mt-2">
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={28}
        style={{backgroundColor:"#9c88ff"}}
      >
        Action
      </Button>
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={12}
        style={{backgroundColor:"#9c88ff"}}
      >
        Adventure
      </Button>
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={35}
        style={{backgroundColor:"#9c88ff"}}
      >
        Comedy
      </Button>
    </ButtonGroup>
    <ButtonGroup size="sm">
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={10749}
        style={{backgroundColor:"#9c88ff"}}
      >
        Romance
      </Button>
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={18}
        style={{backgroundColor:"#9c88ff"}}
      >
        Drama
      </Button>
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={80}
        style={{backgroundColor:"#9c88ff"}}
      >
        Crime
      </Button>
    </ButtonGroup>
    <ButtonGroup size="sm">
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={27}
        style={{backgroundColor:"#9c88ff"}}
      >
        Horror
      </Button>
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={878}
        style={{backgroundColor:"#9c88ff"}}
      >
        Science Fiction
      </Button>
      <Button
        className="m-2"
        variant="warning"
        onClick={(e) => setGenre_id(e.target.value)}
        value={10752}
        style={{backgroundColor:"#9c88ff"}}
      >
        War
      </Button>
    </ButtonGroup>

    <Button
      className="m-2"
      variant="secondary"
      size="sm"
      onClick={handleSearch}
      style={{backgroundColor:"#130f40"}}
    >

      Search
    </Button>
    {/* <Button
      className="m-2"
      variant="primary"
      size="sm"
      onClick={() => {
       filtered=[]
      }}
    >
      Reset
    </Button> */}
    
    <h3>Results:</h3>
    
    {
      
      dataResults.map((item,index)=>(
        console.log(item),
        <div key={index} className="col-sm-4">

        <Link to={`/detail/${item.id} `} style={{ color: 'black' }}><ItemCard img={`${img_url}${item.poster_path}`} title={item.title} releaseDate={item.release_date} id={item.id}/></Link>
       {console.log(img_url+item.poster_path)}
       
      </div>
       
      ))
    }
  
</>);
    
  }
}


export default FilterPage;