import { useParams } from "react-router-dom"
import { useQuery } from 'react-query';
import { fetchSingleMovie, fetchSingleMovieCredits, fetchReviews, fetchRecommendations } from '../../api';




const Details = (props) => {
    const { movieId } = useParams()

    const reviewsQuery = useQuery(["reviews", movieId], () => fetchReviews(movieId), { retry: false, select: state => state?.data })
    console.log("REVIEWS:::", reviewsQuery)

    const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
    console.log("movieQuery:::", movieQuery)
    const movieCreditsQuery = useQuery(["moviecredits", movieId], () => fetchSingleMovieCredits(movieId), { retry: false, select: state => state?.data })
    console.log("movieCast:::", movieCreditsQuery)
    const movieData = movieQuery?.data

    const reviewsData = reviewsQuery?.data
    console.log("Reviews:::", reviewsData)
    const movieCastData = movieCreditsQuery?.data?.cast
    const movieCrewData = movieCreditsQuery?.data?.crew
    const job = ["director", "producer"]
    const recommendations = useQuery(
        ["movie recommendations", movieId],
        () => fetchRecommendations(movieId),
        {
            retry: false,
        }
    );
    return (
        <>
            <div className="container -fluid ">
                <div className="container d-flex"  >
                    <div className=""  >
                        <img key={movieData?.id} style={{ width: '20rem' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" /></div>
                    <div className="offset-1" >
                        <h3 >Movie Name: {movieData?.title}</h3>
                        <h5>Overview: </h5>
                        <h6 className="col-sm-8 justif-content-center my-2">{movieData?.overview}</h6>
                        <h6>Movie Released Date:<span>{movieData?.release_date}</span></h6>
                       
                    </div>
                </div>
            </div>
            <h2 className="my-2">Film Cast:</h2>
            <div className="container d-flex flex-row justify-content-center row mb-2" style={{ backgroundColor: "#ecf0f1ey" }}>
                
            </div>
           <div className="row">
            <h5>Reviews:</h5>
            <div className='review-part'>
                
                    <div className="col-sm-6">
                     <p style={{ color: "#8e44ad" }}>
                         <span>{reviewsData?.results[0]?.author[0].toUpperCase()}</span>
                         {
                            reviewsData?.results[0]?.author
                        }
                    </p> {
                        
                         reviewsData?.results[0]?.content?.slice(0, 300) 
                       
                    }..
               </div>
               
           </div>
           
        </div>
        </>
    )
};


export default Details;