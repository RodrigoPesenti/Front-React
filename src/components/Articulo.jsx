const Articulo = ({ articulo }) => {

    const { descripcion, codigo, costo } = articulo

    return ( 
       <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion: {''}
            <span className="font-normal normal-case">{descripcion}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Codigo: {''}
            <span className="font-normal normal-case">{codigo}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Costo: {''}
            <span className="font-normal normal-case">{costo}</span>
        </p>
       </div>
     );
}
 
export default Articulo;