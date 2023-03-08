
import { 
ADD_FAVOURITE_REQUEST,
REMOVE_FAVOURITE_REQUEST
} from "./types"

export const addFavourite = (data, id) => {
  const res = data.results.find(item => item.id === id);
  console.log(res);
  return res;

};

