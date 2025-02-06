import PropTypes from "prop-types";
import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"
import FilterByGender from "./FilterByGender";
import "../../styles/Filters.scss"

function Filters({ setFilterName, filterName, setFilterHouse, filterHouse, setFilterGender, filterGender }) {
  
  const handleForm = (ev) =>{
    ev.preventDefault()
  }

  return (
    <form onSubmit={handleForm} className="form">
        <FilterByName setFilterName={setFilterName} filterName={filterName}/>
        <FilterByHouse setFilterHouse={setFilterHouse} filterHouse={filterHouse}/>
        <FilterByGender setFilterGender={setFilterGender} filterGender={filterGender}/>
    </form>
  )
}

Filters.propTypes = {
  setFilterName: PropTypes.func,
  setFilterHouse:PropTypes.func,
  setFilterGender: PropTypes.func,
  filterName: PropTypes.string,
  filterHouse: PropTypes.string,  
  filterGender: PropTypes.string,
};

export default Filters