import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const Movie = () => {
  const location = useLocation();

  return (
    <>
      <h1>{location.state.movie.title}</h1>
      <h1>{location.state.movie.shortDesc}</h1>
      <h1>{location.state.movie.longDesc}</h1>
    </>
  );
};

export default Movie;
