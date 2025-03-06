import PropTypes from "prop-types";
import "../styles/ResetButton.scss"
function ResetButton({ setFilterName, setFilterHouse, setFilterGender }) {

    const handleReset = () =>{
        setFilterName("");
        setFilterHouse("Gryffindor");
        setFilterGender("");
    }

  return (
    <button onClick={handleReset} className="resetbutton">
        Reset
    </button>
  )
}

ResetButton.propTypes = {
  setFilterName: PropTypes.func,
  setFilterHouse:PropTypes.func,
  setFilterGender:PropTypes.func,
};

export default ResetButton