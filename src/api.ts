const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export interface ITVSeries {
    backdrop_path: string;
    overview: string;
    name: string;
    id: number;
    poster_path: string;
    genre_ids: number[];
}

export interface IPopularTVSeries {
    results: ITVSeries[]
}

export function getPopularTVSeries() {
  return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getTVGeners() {
  return fetch(`${BASE_PATH}/genre/tv/list?api_key=${API_KEY}`).then((response) => response.json());
}

export interface ITvGener {
  id: number;
  name: string;
}

export interface ITvGenerList {
    genres: ITvGener[]
}
