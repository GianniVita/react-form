import './App.jsx'
import {useState} from 'react'


      const articoli = [
      {
        id: 1,
      titolo: "Introduzione a JavaScript Moderno"
    },
      {
        id: 2,
      titolo: "Guida Completa ai CSS Grid Layout"
    },
      {
        id: 3,
      titolo: "Best Practice per il Deploy di Applicazioni Web"
    },
      {
        id: 4,
      titolo: "L'Ascesa dell'Intelligenza Artificiale nel Web Development"
    }
      ];


function App() {

  //let gianni ="gianni";
  //const [ pippo, setPippo ] = useState("pippo");
  //const [ numeroPanini, setNumeroPanini ] = useState(0);
const [titoloArticoli, setTitoloArticoli] = useState(articoli);
  return (
    <>
    <form>
    

    </form>



    {

      titoloArticoli.map((articolo, index) => {
        return(

          <div key={index}>
              <p>{articolo.titolo}</p>
            </div>


        )

      })

    }

    </>
  )
}

export default App
