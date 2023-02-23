import React from 'react';
import { Link } from "react-router-dom";
import FavFilled from '../FavField';


const MovieCard = ({id}) => {
  return (
   <div className="card" style={{ width: '16rem' ,backgroundColor:"#ecf0f1"}}>
      <button onClick={() => this.props.add(id)}>Add to Fav</button>
   </div>
  )
}

export default MovieCard