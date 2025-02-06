import PropTypes from "prop-types";

function FilterByGender({ setFilterGender }) {
  
    const handleRadio = (ev) =>{
        setFilterGender(ev.target.value)
    }

  return (
    <div>
        <label htmlFor="">Selecciona el género: </label>
        <input type="radio" name="gender" id="female" onChange={handleRadio} value="female"/>
        <label htmlFor="female">Femenino </label>
        <input type="radio" name="gender" id="male" onChange={handleRadio} value="male"/>
        <label htmlFor="male">Masculino </label>
    </div>
  )
}

FilterByGender.propTypes = {
  setFilterGender: PropTypes.func,
};

export default FilterByGender