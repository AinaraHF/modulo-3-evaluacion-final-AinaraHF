import PropTypes from "prop-types";


function FilterByHouse({ setFilterHouse, filterHouse }) {

    const handleSelect = (ev) => {
        setFilterHouse(ev.target.value)
  }

  return (
    <div>
        <label htmlFor="house" className="labelHouse">Elige la casa: </label>
        <select name="house" id="house" onChange={handleSelect} value={filterHouse} className="optionHouse">
            <option value="Gryffindor" className="optionHouse">Gryffindor 🦁</option>
            <option value="Slytherin" className="optionHouse">Slytherin 🐍</option>
            <option value="Hufflepuff" className="optionHouse">Hufflepuff 🦡</option>
            <option value="Ravenclaw" className="optionHouse">Ravenclaw 🦅</option>
        </select>
    </div>
  )
}

FilterByHouse.propTypes = {
  setFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string,
};

export default FilterByHouse
