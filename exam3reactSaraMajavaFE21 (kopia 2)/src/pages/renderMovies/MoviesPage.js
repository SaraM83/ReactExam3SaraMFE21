import RenderMovies from "../../components/rendermovies/RenderMovies";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MoviesPage = () => {
  const navigate = useNavigate();

  const goToAddMovie = () => {
    const getConf = localStorage.getItem("statusKey");
    if (getConf === "success") {
      navigate("/addmovie");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <RenderMovies />
      <button onClick={goToAddMovie}>Add Movie</button>
    </>
  );
};

export default MoviesPage;
