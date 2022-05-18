const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}


interface ITVSeries {
    backdrop_path: string;
    overview: string;
    name: string;
    id: number;
    poster_path: string;
}

export interface IPopularTVSeries {
    results: ITVSeries[]
}

export function getPopularTVSeries() {
  return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}