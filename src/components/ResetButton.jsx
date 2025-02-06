import PropTypes from "prop-types";

function ResetButton({ setFilterName, setFilterHouse }) {

    const handleReset = () =>{
        setFilterName("")
        setFilterHouse("Gryffindor")
    }

  return (
    <button onClick={handleReset}>
        Reset
    </button>
  )
}

ResetButton.propTypes = {
  setFilterName: PropTypes.func,
  setFilterHouse:PropTypes.func,
};

export default ResetButton