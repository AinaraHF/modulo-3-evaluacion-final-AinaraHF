
function FilterByName({ setFilterName }) {

    const handleInput = (ev) => {
        setFilterName(ev.target.value.toLowerCase())
    }

  return (
    <div>
        <label htmlFor="name">Busca por nombre de personaje </label>
        <input type="text" id="name" onChange={handleInput}/>
    </div>
  )
}

export default FilterByName