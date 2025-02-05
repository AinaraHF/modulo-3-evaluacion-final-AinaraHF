import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"

function Filters({ setFilterName, setFilterHouse }) {
  return (
    <form>
        <FilterByName setFilterName={setFilterName}/>
        <FilterByHouse setFilterHouse={setFilterHouse}/>
    </form>
  )
}

export default Filters