import * as React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Checkbox from '@material-ui/core/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export default function FavFilled({id}) {

  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite/>} />
    </div>
  );
}