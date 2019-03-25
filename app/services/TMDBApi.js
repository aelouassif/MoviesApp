import {API_TOKEN} from '../helper/token.js'



export function getFilmsFromApiWithSearchText(text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key='+ API_TOKEN +'&language=en-US&page=1&include_adult=false&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => {
      return response.json()
    })
    .catch((error) => console.log(error))
}

export function getImageFromApi(nom) {
  return 'https://image.tmdb.org/t/p/w300' + nom
}
