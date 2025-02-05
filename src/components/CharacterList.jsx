import "../styles/CharacterList.scss"
import Character from "./Character"

function CharacterList({ data }) {

    const htmlList = data.map((character, index) => <Character key={character.id} info={data} i={index}/>)
    
  return (
    <ul className="characterlist">
        {htmlList}
    </ul>
  )
}

export default CharacterList