import { useEffect, useState } from "react"
import getDataApi from "../services/api"
import CharacterList from "./CharacterList"

function App() {
  
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    getDataApi().then((data)=>{ setCharacters(data)})
  }, [])

  return (
    <>
      <h1>Harry Potter</h1>
      <CharacterList data={characters}/>
    </>
  )
}

export default App
