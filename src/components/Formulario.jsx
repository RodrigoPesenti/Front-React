import { useState } from 'react'

const Formulario = ({ articulos, setArticulos }) => {
  //hook use state, posee un array con 2 valores, El useState reicibe como parametros stings, booleanos,enteros, etc
  //Tenemos 4 hooks un por cada campo del formulario
  const [descripcion, setDescripcion] = useState('')
  const [codigo, setCodigo] = useState('')
  const [costo, setCosto] = useState('')
  const [posts, setPosts] = useState([]);

  //Hook para escuchar los cambios de error
  const [error, setError] = useState(false)

  const crearArticulo = (descripcion,codigo,costo) => {
    fetch('http://[::1]:3000/articulos', {
      method: "POST",
      body: JSON.stringify({
        descripcion: descripcion,
        codigo: codigo,
        costo: costo
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setDescripcion('');
        setCodigo('');
        setCosto('');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault() //No ejecuta la funcion hasta que el usuaio oprima el boton

    // validacion del Formulario
    if ([descripcion, codigo, costo].includes('')) {


      setError(true)


    } else {
      setError(false)

      // obejeto de articulos
      const objetoArticulo = {
        descripcion,
        codigo,
        costo,
      }

      crearArticulo(descripcion,codigo,costo)

      // ... es un spread operator (Hace una copia de el objeto, para no sobreescribir)
      setArticulos([...articulos, objetoArticulo])

      console.log(descripcion)
      // reiniciar el formulario
      setDescripcion('')
      setCodigo('')
      setCosto('')
    }

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de articulos</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade articulos y {" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        {error && //ternario y //Equivalente a if error then

          <div className='bg-red-800 text-white text-center p-3-uppercase font-bold mb-3 rounded-md'>
            <p>Todos los campos son obligatorios </p>
          </div>
          //Si no
        }
        <div className="mb-5">
          <label htmlFor="Descripcion">Descripcion</label>
          <input
            id="Descripcion"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="text"
            placeholder="Descripcion del articulo"
            value={descripcion}
            //Evento al cual se le pasa una funcion que setea el nombre
            onChange={(e) => setDescripcion(e.target.value)}

          />
        </div>

        <div className="mb-5">
          <label htmlFor="Codigo">Codigo del articulo</label>
          <input
            id="codigo"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="text"
            placeholder="Codigo del articulo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="costo">Costo del articulo</label>
          <textarea
            id="costo"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            placeholder="Costo del articulo"
            value={costo}
            onChange={(e) => setCosto(parseInt(e.target.value))}

          />
        </div>

        <input
          type="submit"
          className="
              bg-indigo-600 
              w-full 
              p-3 
              text-white 
              uppercase 
              font-bold 
              hover:bg-indigo-700 cursor-pointer transition-colors"
        />
      </form>
    </div>

  );
}


export default Formulario;