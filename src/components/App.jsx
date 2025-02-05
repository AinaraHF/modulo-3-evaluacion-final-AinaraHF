import { useEffect, useState } from "react"
import getDataApi from "../services/api"
import CharacterList from "./CharacterList"
import Filters from "./filters/Filters"

function App() {
  
  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState("Gryffindor")

  useEffect(()=>{
    getDataApi(filterHouse).then((data)=>{ setCharacters(data)})
  }, [filterHouse])

  const filterCharacters = characters.filter(character => character.name.toLowerCase().includes(filterName))
  .filter(character=> character.house === filterHouse)

  return (
    <>
      <h1>Harry Potter</h1>
      <Filters setFilterName={setFilterName} setFilterHouse={setFilterHouse}/>
      <CharacterList data={filterCharacters}/>
    </>
  )
}

export default App
