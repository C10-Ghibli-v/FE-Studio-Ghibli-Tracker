import React from "react";
import CardMovie from "../components/CardMovie";
import Header from "../components/Header";

const MoviesList = () => {
  return (
    <div>
      <Header />
      <CardMovie
        title="Gumbal"
        time={120}
        year={2011}
        stars="estrellas 5"
        rottenTomatoes={100}
      />
    </div>
  );
};

export default MoviesList;
