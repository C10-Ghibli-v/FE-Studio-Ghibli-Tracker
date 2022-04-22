import react, {useState, useEffect, useMemo, useRef, useCallback} from "react";
import Header from "./Header";

function GetData() {

    const apiUrl = "https://ghibli-trackers-movies.herokuapp.com/movies"
    const [todos, setTodos] = useState();
    const traerDatos = async () => {

        const response = await fetch(apiUrl)
        const responseJSON = await response.json();
        setTodos(responseJSON);
        console.log(responseJSON);
    };

    const [search, setSearch] = useState('');

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    const searchInput = useRef(null);
    const filteredUsers = useMemo(() =>
    todos && todos.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    }), 
        [todos, search]  
    )

    useEffect(() => {
        traerDatos();
      }, [])
    
    return (
    <div>
    <Header search={search} searchInput={searchInput} handleSearch={handleSearch}/>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        { !todos ? 'Cargando...':
            filteredUsers.map( (todo, index) => {
            return (
                <div className="grid justify-center my-5">
                    <div className="w-[300px] rounded-lg overflow-hidden border-2 border-white">
                        <img className="w-full object-cover <!--aspect-[4/5]-->" src={todo.image}/>
                        <div className="grid text-white p-3">
                        <div className="flex justify-between truncate">
                            <h3 className="text-lg font-bold p-1 truncate">{todo.name}</h3>
                            <p className="p-1">{todo.stars}⭐</p>
                        </div>
                        <p className="text-sm self-center p-1">{todo.time} min</p>
                        <p className="text-sm self-center p-1">{todo.year}</p>
            
                        <div className="flex justify-between items-center">
                            <div className="flex">
                            <p className="self-center p-1">Rotten Tomatoes: </p>
                            <p className="self-center p-1">{todo.rotten_tomatoes} %</p>
                            </div>
                            <button className="bg-white hover:bg-gray-400 text-black font-semibold px-2 border border-gray-400 rounded shadow">Ver más</button>
                        </div>
                        </div>
                    </div>
                </div>
                )
            })
        }
    </div>
    </div>
    );
};

export default GetData;

