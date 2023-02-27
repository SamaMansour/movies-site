export const fetchResults = async (query) => {
  if (query.length > 0){
    const decodedQuery = query.replace(' ', '+');
    const API_KEY = "d3fea0d49f7035466ab4c90405575aa0";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${decodedQuery}&page=1&include_adult=false`;
    const res = await fetch(url);
      const resJson = res.json();
      return resJson;
    } else {
      return [];
    }

}