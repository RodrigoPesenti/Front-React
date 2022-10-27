const Tarea = ({ tarea }) => {

    const { nombre, puesto, fecha, descripcion } = tarea

    return ( 
       <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Puesto: {''}
            <span className="font-normal normal-case">{puesto}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de la tarea: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion: {''}
            <span className="font-normal normal-case">{descripcion}</span>
        </p>
       </div>
     );
}
 
export default Tarea;