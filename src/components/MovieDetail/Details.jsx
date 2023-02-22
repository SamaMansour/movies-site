import { useParams } from "react-router-dom"
import React, { useState } from "react";
import { useQuery } from 'react-query';
import { fetchSingleMovie } from '../../api';




const Details = (props) => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);


    const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
    console.log("movieQuery:::", movieQuery);

    const movieData = movieQuery?.data


    return (
        <>
            <div className="container -fluid ">
                <div className="container d-flex"  >
                    {/* <div className=""  >
                        <img key={movieData?.id} style={{ width: '20rem' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" />
                    </div> */}
                    <div className="offset-1" >
                        <h3 >Movie Name: {movieData?.title}</h3>
                        <h5>Overview: </h5>
                        <h6 className="col-sm-8 justif-content-center my-2">{movieData?.overview}</h6>
                        <h6>Movie Released Date:<span>{movieData?.release_date}</span></h6>
                       
                    </div>
                </div>
            </div>
        
        </>
    )
};


export default Details;