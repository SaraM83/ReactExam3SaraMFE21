import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();

  const movieObject = {
    title: "",
    shortDesc: "",
    longDesc: "",
    file: null,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/movies", { state: { movieObject } });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => (movieObject.title = e.target.value)}
        />
        <br></br>
        <input
          type="text"
          name="short-desc"
          placeholder="Short description"
          onChange={(e) => (movieObject.shortDesc = e.target.value)}
        />
        <br></br>
        <input
          type="text-area"
          name="long-desc"
          placeholder="Long description"
          onChange={(e) => (movieObject.longDesc = e.target.value)}
        />
        <br></br>
        <input
          type="file"
          onChange={(e) => (movieObject.file = e.target.value)}
        />
        <br></br>
        <input type="submit" value="Add movie" />
      </form>
    </>
  );
};

export default AddMovie;
