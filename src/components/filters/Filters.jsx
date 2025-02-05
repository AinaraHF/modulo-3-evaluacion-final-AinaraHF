import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"

function Filters({ setFilterName, filterName, setFilterHouse, filterHouse }) {
  
  const handleForm = (ev) =>{
    ev.preventDefault()
  }

  return (
    <form onSubmit={handleForm}>
        <FilterByName setFilterName={setFilterName} filterName={filterName}/>
        <FilterByHouse setFilterHouse={setFilterHouse} filterHouse={filterHouse}/>
    </form>
  )
}

export default Filters