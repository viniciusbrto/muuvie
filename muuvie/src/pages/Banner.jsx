import React, { useEffect, useState } from "react";
import "./banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      <div className="movie">
        <img src="" alt="Background" className="bgImg" />
        <div className="container-fluid">
          <div className="col-lg-6 col-md-12">
            <div className="content"></div>
            <img src="" alt="Movie Title" className="movie-title" />
            <h4>
              <span>Year</span>
              <span>
                <i>age</i>
              </span>
              <span>length</span>
              <span>category</span>
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              quaerat sapiente voluptatibus nobis voluptatum adipisci itaque
              quia magni possimus omnis libero aspernatur dolorum vero obcaecati
              commodi rem ratione, explicabo recusandae?
            </p>
            <div className="div buttom">Buttom</div>
          </div>
          <div className="col-lg-6 col-md-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
