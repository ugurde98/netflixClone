import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
      return result;
    }
    fetchData();
  }, []);

  function truncate(str,n){
    return str?.length>n ?str.substr(0,n-1)+"...":str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div>
          <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
export default Banner;
