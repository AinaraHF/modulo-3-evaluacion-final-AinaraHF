import PropTypes from "prop-types";
import "../styles/CharacterList.scss"
import Character from "./Character"

function CharacterList({ data }) {

    const htmlList = data.map((character, index) => <Character key={character.id} info={data} i={index}/>)
    
  return (
    <div>
      
        {data.length !== 0 ? <ul className="characterlist">{htmlList}</ul> : <p>Este personaje no existe</p> }
    
    </div>
  )
}

CharacterList.propTypes = {
  data: PropTypes.array,
};

export default CharacterList