import {API_TOKEN} from '../helper/token.js'



export function getFilmsFromApiWithSearchText(text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key='+ API_TOKEN +'&language=en-US&page=1&include_adult=false&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getImageFromApi(nom) {
  return 'https://image.tmdb.org/t/p/w300' + nom
}
