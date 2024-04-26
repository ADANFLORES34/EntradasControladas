import { useState } from 'react'
import './App.css'

import React from 'react'


function App() {
   const [Entradas,setEntradas] = useState([])


    
  const handleText = async(term) =>{

  
  
  
   
    console.log(result)
  
    setEntradas(result)

  }

   

    return (
        <div>
          <div>
            Capture su texto
          </div>
          <input onChange={handleText} value={term}/>
        </form>
          <h3>Su Texto</h3>
          <p>
            {Entradas}
          </p>
        </div>
    );
}

export default App;