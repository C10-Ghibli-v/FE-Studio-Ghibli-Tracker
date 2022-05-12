import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getMovieDetail = async () => {
    const apiUrl = "https://vast-chamber-00684.herokuapp.com/movies";
    const response = await fetch(apiUrl);
    const { data } = await response.json();
    const detail = data.find((movie) => movie._id === id);
    setMovie(detail);
  };
  console.log(movie);

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default MovieDetail;
