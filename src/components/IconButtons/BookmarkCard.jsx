import React from 'react';
import FavFilled from './FavFilled';
import SavFilled from './FavFilled';
import BookmarkFilled from './BookmarkFilled';
import { Link } from "react-router-dom";


function BookmarkCard({id}) {
  return (
    <>
      <div className="card" style={{ width: '24rem' ,backgroundColor:"#ecf0f1"}}>
        <BookmarkFilled id={id} />
      </div>
    </>
  );
}

export default BookmarkCard;