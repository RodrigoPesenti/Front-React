import Tarea from "./Tarea";

const ListadoTarea = ( { tareas }) => {
    return ( 
        <div className="w-1/2 lg:w-3/5">
        <h2 className="text-xl mt-5 mb-10 text-center">Listado de tareas</h2>

        {
            //.map crea la lista
            tareas.map( tarea  => (
                <Tarea
                    key={tarea.id}
                    tarea = { tarea }
                />
            ))

        }
        </div>
     );
}
 
export default ListadoTarea;