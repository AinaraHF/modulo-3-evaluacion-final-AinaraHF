import "../styles/Character.scss"

function Character({ info, i }) {

  return (
    <li className="character">
        <img src={info[i].image !== "" ? info[i].image : "https://placehold.co/200x300/png"} alt={info[i].name} className="character_image"/>
        <h4 className="character_name">{info[i].name}</h4>
        <p className="character_species">{info[i].species}</p>
    </li>
  )
}

export default Character