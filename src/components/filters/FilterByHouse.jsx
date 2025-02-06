import PropTypes from "prop-types";


function FilterByHouse({ setFilterHouse, filterHouse }) {

    const handleSelect = (ev) => {
        setFilterHouse(ev.target.value)
  }

  return (
    <div>
        <label htmlFor="house">Elige la casa: </label>
        <select name="house" id="house" onChange={handleSelect} value={filterHouse}>
            <option value="Gryffindor">Gryffindor 🦁</option>
            <option value="Slytherin">Slytherin 🐍</option>
            <option value="Hufflepuff">Hufflepuff 🦡</option>
            <option value="Ravenclaw">Ravenclaw 🦅</option>
        </select>
    </div>
  )
}

FilterByHouse.propTypes = {
  setFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string,
};

export default FilterByHouse
