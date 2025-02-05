
function FilterByHouse({ setFilterHouse }) {

    const handleSelect = (ev) => {
        setFilterHouse(ev.target.value)
  }

  return (
    <div>
        <label htmlFor="house">Elige la casa </label>
        <select name="house" id="house" onChange={handleSelect}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
        </select>
    </div>
  )
}

export default FilterByHouse
