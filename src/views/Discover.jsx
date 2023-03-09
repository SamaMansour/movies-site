import React from 'react';
import {useState,useEffect} from 'react';
import { Discover_URL ,img_url} from '../api';
import ItemCard from '../components/ItemCard';
import {Link} from 'react-router-dom';
import ButtonCard from '../components/IconButtons/ButtonCard';
import BookmarkCard from '../components/IconButtons/BookmarkCard';
import SlideshowWithPagination from 'react-slideshow-with-pagination';
import Slider from '@ant-design/react-slick';
import sliderSettings from '../components/Slider';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../store/actions/favouriteActions';

function Discover(props) {
	const [data, setData] = useState([]);
	const [subData, setSubData] = useState([]);
	let wishList = [];
	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
  
	useEffect(() => {
		const URL =Discover_URL ;
		fetch(URL)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
			});
	}, []);
  
	console.log('data',data.results);
	var wishListData;
	const dispatch = useDispatch();
	const addToWishList = (data, id)=>{
		wishListData = dispatch(addFavourite(data, id));
		console.log(wishListData);
		wishList.push(wishListData);
		console.log(wishList);
		setSubData((wishList)=>wishList.concat(wishListData));
		console.log(subData);

	};

	useEffect(() => {
		localStorage.setItem('myWishList', JSON.stringify(subData));
		console.log('added successfully', subData);
    
	}, [subData]);

  
	console.log(wishListData);
	return (
		<>
			<h2>Discover</h2>
			<div>
				<div >
					<Slider {...sliderSettings}>
						{   
							data?.results?.map((item,index)=>(
								console.log(item),
								<div className="col-sm-4 mb-2">
									<button onClick={()=>{ addToWishList(data, item.id);}}>
										<ButtonCard/> 
									</button>
									<Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}><ItemCard img={`${img_url}${item.poster_path}`} title={item.title} overview={item.overview} id={item.id}/></Link>
									{console.log(img_url+item.poster_path)}
								</div>
          
							))
						}
					</Slider>
				</div>
     
				<div className="b-example-divider my-5">
					
					<h2>WishList</h2>
					<div className="container-fluid row "> 
						{ subData.map((item, index)=>(
							console.log(['id']),
							<div key={index} className="col-sm-4 mb-2">
								<Link to={`/detail/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}><ItemCard img={`${img_url}${item.poster_path}`} title={item.title} overview={item.overview} id={item.id}/></Link>
								{console.log(img_url+item.poster_path)}
							</div>))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Discover;