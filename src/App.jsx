
import {  useState } from "react"
import Header from "./components/Header"
import Guitarra from "./components/Guitarra"
import { db } from "./data/db"
function App() {
  
  const [data]= useState(db)


  return (
    <>
    <Header />
        
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarra) => (
            // eslint-disable-next-line react/jsx-key
            <Guitarra
              guitarra={guitarra}
            />
          ))}
          
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
