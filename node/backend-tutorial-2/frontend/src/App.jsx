
import './App.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  // const [count, setCount] = useState(0)
  const [jokes,setJokes]=useState([]);

     useEffect(()=>{
      axios.get('api/jokes')
      .then((Response)=>{
        setJokes(Response.data)

      })
      .catch((error)=>{
        console.log(error)
      })
     })


  return (
    <>
    <p> JOKES:{jokes.length}

    </p>
    {
      jokes.map((joke,index)=>(

          <div key={index}>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
          </div>
        
     ))}
        
    </>
  )
}

export default App;