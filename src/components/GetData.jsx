import react, {useState, useEffect, useMemo, useRef, useCallback} from "react";
import Header from "./Header";

function GetData() {

    const apiUrl = "https://vast-chamber-00684.herokuapp.com/movies"
    const [movies, setMovies] = useState();
    const traerDatos = async () => {

        const response = await fetch(apiUrl)
        const responseJSON = await response.json();
        setMovies(responseJSON.data);
        console.log(responseJSON);
    };

    const [search, setSearch] = useState('');

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    const searchInput = useRef(null);
    const filteredUsers = useMemo(() =>
    movies && movies.filter((user) => {
        return user.title.toLowerCase().includes(search.toLowerCase());
    }), 
        [movies, search]  
    )

    useEffect(() => {
        traerDatos();
      }, [])
    
    return (
    <div><>
    <Header search={search} searchInput={searchInput} handleSearch={handleSearch}/>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        { !movies ? 'Cargando...':
            filteredUsers.map( (movie, index) => {
            return (
                <div className="grid justify-center my-5">
                    <div className="w-[300px] rounded-lg overflow-hidden border-2 border-white">
                        <img className="w-full object-cover <!--aspect-[4/5]-->" src={movie.image}/>
                        <div className="grid text-white p-3">
                        <div className="flex justify-between truncate">
                            <h3 className="text-lg font-bold p-1 truncate">{movie.title}</h3>
                            <p className="p-1">{movie.stars}⭐</p>
                        </div>
                        <p className="text-sm self-center p-1">{movie.duration} min</p>
                        <p className="text-sm self-center p-1">{movie.releaseDate}</p>
            
                        <div className="flex justify-between items-center">
                            <div className="flex">
                            <p className="self-center p-1">Rotten Tomatoes: </p>
                            <p className="self-center p-1">{movie.rtScore} %</p>
                            </div>
                            <button className="bg-white hover:bg-gray-400 text-black font-semibold px-2 border border-gray-400 rounded shadow">Ver más</button>
                        </div>
                        </div>
                    </div>
                </div>
                )
            })
        }
    </div></>
    </div>
    );
};

export default GetData;