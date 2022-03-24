import React from "react";
const DEFAULT_IMAGE =
  "https://www.nacionrex.com/__export/1515916465717/sites/debate/img/2018/01/14/foto_de_portada_perros.jpg_172596871.jpg";

const CardMovie = ({
  picture = DEFAULT_IMAGE,
  title,
  time,
  year,
  stars,
  rottenTomatoes,
  emoji = "😎",
}) => {
  return (
    <div className="w-[300px] rounded-lg overflow-hidden border-2 border-white ">
      <img className="w-full object-cover aspect-[4/5]" src={picture} />
      <div className=" text-white p-3">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <p>{stars}</p>
        </div>
        <p className="text-sm">{time} min</p>
        <p className="text-sm">{year}</p>

        <div className="flex justify-between items-center mt-2">
          <div className="flex">
            <p className="mr-2">Rotten Tomatoes: </p>
            <p>{rottenTomatoes} %</p>
          </div>
          <p className="text-4xl">{emoji}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
