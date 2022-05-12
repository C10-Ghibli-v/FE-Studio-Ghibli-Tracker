import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import HeaderMovie from "./HeaderMovie";
import CardMovie from "../components/CardMovie";

function GetData() {
  const apiUrl = "https://vast-chamber-00684.herokuapp.com/movies";
  const [movies, setMovies] = useState();
  const traerDatos = async () => {
    const response = await fetch(apiUrl);
    const responseJSON = await response.json();
    setMovies(responseJSON.data);
    console.log(responseJSON);
  };

  const [search, setSearch] = useState("");

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const searchInput = useRef(null);
  const filteredUsers = useMemo(
    () =>
      movies &&
      movies.filter((user) => {
        return user.title.toLowerCase().includes(search.toLowerCase());
      }),
    [movies, search]
  );
  useEffect(() => {
    traerDatos();
  }, []);

  return (
    <>
      <div>
        <HeaderMovie
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!movies
            ? "Cargando..."
            : filteredUsers.map((movie) => {
                return <CardMovie key={movie._id} {...movie} />;
              })}
        </div>
      </div>
    </>
  );
}

export default GetData;
