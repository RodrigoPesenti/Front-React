import Articulo from "./Articulo";
import { useState } from 'react'

const ListadoArticulo = ( { articulos }) => {
    const [posts, setGets] = useState([]);

    const obtenerArticulos = (descripcion,codigo,costo) => {
        fetch('http://[::1]:3000/articulos', {
          method: "GET"
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setGets(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
      obtenerArticulos()
    return ( 
        
        <div className="w-1/2 lg:w-3/5">
        <h2 className="text-xl mt-5 mb-10 text-center">Listado de articulos</h2>

        {
            //.map crea la lista
            posts.map( articulo  => (
                <Articulo
                    key={articulo.id}
                    articulo = { articulo }
                />
            ))

        }
        </div>
     );
}
 
export default ListadoArticulo;