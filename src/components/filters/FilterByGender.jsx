import PropTypes from "prop-types";

function FilterByGender({ setFilterGender }) {
  
    const handleRadio = (ev) =>{
        setFilterGender(ev.target.value)
    }

  return (
    <div>
        <label htmlFor="" className="labelGender">Selecciona el género: </label>
        <input type="radio" name="gender" id="female" onChange={handleRadio} value="female"/>
        <label htmlFor="female" className="labelGender"> Femenino </label>
        <input type="radio" name="gender" id="male" onChange={handleRadio} value="male"/>
        <label htmlFor="male" className="labelGender"> Masculino </label>
    </div>
  )
}

FilterByGender.propTypes = {
  setFilterGender: PropTypes.func,
};

export default FilterByGender