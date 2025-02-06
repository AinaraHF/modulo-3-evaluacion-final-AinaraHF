import { useEffect, useState } from "react"
import getDataApi from "../services/api"
import CharacterList from "./CharacterList"
import Filters from "./filters/Filters"
import { matchPath, Route, Routes, useLocation } from "react-router-dom"
import CharacterDetail from "./CharacterDetail"
import "..//styles/App.scss"
import ResetButton from "./ResetButton"
import PageNotFound from "./PageNotFound"

function App() {
  
  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState("Gryffindor")

  useEffect(()=>{
    getDataApi(filterHouse).then((data)=>{ setCharacters(data)})
  }, [filterHouse])

  const filterCharacters = characters.filter(character => character.name.toLowerCase().includes(filterName))
  .filter(character=> character.house === filterHouse)

  const { pathname } = useLocation()
  const characterRoute = matchPath("/character/:idCharacter", pathname)
  const characterIdUrl = characterRoute ? characterRoute.params.idCharacter : null

  const characterDetail = characters.find(item=> item.id === characterIdUrl)
  
  return (
    <>
    <Routes>
      <Route path="/" element={
        <>
      <h1>Harry Potter</h1>
      <Filters setFilterName={setFilterName} setFilterHouse={setFilterHouse} filterName={filterName} filterHouse={filterHouse}/>
      <ResetButton setFilterName={setFilterName} setFilterHouse={setFilterHouse}/>
      <CharacterList data={filterCharacters}/>
        </>
    }/>
      <Route path="/character/:idCharacter" element={<CharacterDetail data={characterDetail}/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
      
    </>
  )
}

export default App
