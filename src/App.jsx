import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoTarea from './components/ListadoTarea'


function App() {

  const [ tareas, setTareas] = useState([])
  const [ tarea, setTarea] = useState({})

  return (
    <div className="container mx-auto mt-20">
      <Header />
        <div className="mt-12 md:flex" >
          <Formulario
            //Estas 2 son props (Properties) sirven para pasar valores entre componentes
            tareas = {tareas}
            setTareas={setTareas}
          />
          <ListadoTarea
            tareas={tareas}
            setTareas= {setTareas}
           />
        </div>

    </div>
  )
}

export default App
