import * as React from 'react';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FontAwesomeSvgIcon = React.forwardRef((props, ref) => {
  const { icon } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return <SvgIcon ref={ref} viewBox={` 25 25 ${width} ${height}`}></SvgIcon>;
});
function handleClick() {
  console.log('clicked');
}

export default function HeartIcon() {
  return (
    <div>
      <Box
        sx={{
          '& > :not(style)': {
            m: 1,
          },
        }}
      >
        <IconButton aria-label="Example" onClick={handleClick}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </IconButton>
        <IconButton aria-label="Example">
          <BookmarkIcon/>
        </IconButton>
        <IconButton aria-label="Example">
          <FavoriteIcon/>
        </IconButton>
      </Box>
    </div>
  );
}