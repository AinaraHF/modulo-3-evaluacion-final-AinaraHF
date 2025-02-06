import PropTypes from "prop-types";
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

Filters.propTypes = {
  setFilterName: PropTypes.func,
  setFilterHouse:PropTypes.func,
  filterName: PropTypes.string,
  filterHouse: PropTypes.string,
};

export default Filters