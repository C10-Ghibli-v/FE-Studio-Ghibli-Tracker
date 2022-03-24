/* Este componente hace una peticion a un API local para simular la extracción de datos por el momento
Para hacer pruebas hay que ejecutar el comando en terminal "npm install -g json-server"
y para levantar el servidor local hay que ejecutar el siguiente comando en terminal estando dentro de la carpeta /assets/db "json-server -w -p 5555 db.json" para poder consumir la API local
*/
import react, {useState, useEffect} from "react";
import image from '../assets/img/image.jpg'

function GetData() {

    const apiUrl = "http://localhost:5555/Peliculas"
    const [todos, setTodos] = useState()
    const traerDatos = async () => {

        const response = await fetch(apiUrl)
        const responseJSON = await response.json();
        setTodos(responseJSON);
        console.log(responseJSON);
    }

    useEffect(() => {
        traerDatos();
    }, [])

    return (
        <>
            { !todos ? 'Cargando...':
                todos.map( (todo, index) => {
                return (
                    <div className="grid justify-center my-5">
                        <div className="w-[300px] rounded-lg overflow-hidden border-2 border-white ">
                            <img className="w-full object-cover aspect-[4/5]" src={image} />
                            <div className=" text-white p-3">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold">{todo.title}</h3>
                                <p>{todo.starts}</p>
                            </div>
                            <p className="text-sm">{todo.time} min</p>
                            <p className="text-sm">{todo.year}</p>
                
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex">
                                <p className="mr-2">Rotten Tomatoes: </p>
                                <p>{todo.rottenTomatoes} %</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
}


export default GetData;

