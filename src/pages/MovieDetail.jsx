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

  if (!movie) return null;

  return (
    <>
      <Header />
      <div className="grid justify-center my-2">
        <div className="w-[400px] rounded-lg overflow-hidden border-2 border-white">
          <img
            className="w-full object-cover <!--aspect-[5/5]-->"
            src={movie.movieBanner}
          />
          <div className="grid text-white p-5">
            <div className="flex justify-between truncate">
              <h3 className="text-lg font-bold p-1 truncate">{movie.title}</h3>
              <p className="p-1">Producer: {movie.producer}</p>
            </div>
            <div className="flex">
              <p className="self-center p-1">Director: </p>
              <p className="self-center p-1">{movie.director}</p>
            </div>
            <p className="text-sm self-center p-1">
              Description: {movie.description}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm self-center p-1">
                Year: {movie.releaseDate}
              </p>
              <a
                href={`https://ghibli.fandom.com/wiki/${movie.title.replaceAll(
                  " ",
                  "_"
                )}`}
                target="_blank"
              >
                <button className="bg-white hover:bg-gray-400 text-black font-semibold px-2 border border-gray-400 rounded shadow">
                  more info
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
