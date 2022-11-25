import { useEffect, useState } from "react";
import {
  useNavigate,
  useLocation,
  NavLink,
  useNavigation,
} from "react-router-dom";
import './RenderMovies.css'; 

const RenderMovies = () => {
  const [movies, setMovies] = useState(
    localStorage.getItem("movieKey")
      ? JSON.parse(localStorage.getItem("movieKey"))
      : []
  );
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.movieObject) {
      setMovies((movies) => [...movies, location.state.movieObject]);
      localStorage.setItem(
        "movieKey",
        JSON.stringify([...movies, location.state.movieObject])
      );
      window.history.replaceState({}, document.title);
    }
  }, []);

  const sendMovieData = (value) => {
    navigate(`/movies/${value.title}`, { state: { movie: value } });
  };

  return (
    <>
      <div className="movies-container">
        <h1>My movies</h1>

        {movies.map((value, index) => {
          return (
            <ul key={index}>
              <li>
                <div className="movie-container">
                  <h3>Movie: {value.title}</h3>
                  <h3>Description: {value.shortDesc}</h3>
                  <button onClick={() => sendMovieData(value)}>
                    Read more
                  </button>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default RenderMovies;
