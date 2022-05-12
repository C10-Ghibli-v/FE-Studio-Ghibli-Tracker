import { Link } from "react-router-dom";

const CardMovie = ({
  image,
  title,
  stars,
  rtScore,
  duration,
  releaseDate,
  _id,
}) => {
  return (
    <div className="grid justify-center my-5">
      <div className="w-[300px] rounded-lg overflow-hidden border-2 border-white">
        <img className="w-full object-cover <!--aspect-[4/5]-->" src={image} />
        <div className="grid text-white p-3">
          <div className="flex justify-between truncate">
            <h3 className="text-lg font-bold p-1 truncate">{title}</h3>
            <p className="p-1">{stars}⭐</p>
          </div>
          <div className="flex">
            <p className="self-center p-1">Rotten Tomatoes 🍅: </p>
            <p className="self-center p-1">{rtScore} % </p>
          </div>
          <p className="text-sm self-center p-1">Duration: {duration} min</p>
          <div className="flex justify-between items-center">
            <p className="text-sm self-center p-1">Year: {releaseDate}</p>
            <Link to={`/movies/${_id}`}>
              <button className="bg-white hover:bg-gray-400 text-black font-semibold px-2 border border-gray-400 rounded shadow">
                Ver más
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
