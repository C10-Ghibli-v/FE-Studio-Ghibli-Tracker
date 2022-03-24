import react, {useState, useEffect} from "react";
import GetData from "../components/GetData";
import Header from "../components/Header";

const MoviesList = () => {
  return (
    <div>
      <Header />
      <GetData />
    </div>
  );
};

export default MoviesList;
