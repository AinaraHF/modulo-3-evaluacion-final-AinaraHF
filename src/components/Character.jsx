import PropTypes from "prop-types";
import "../styles/Character.scss"
import HogwartsCrest from "../images/HogwartsCrest.webp"
import { Link } from "react-router-dom"

function Character({ info, i }) {

  const translation = () => {
    if(info[i].species === "human"){
     return "humano"
  }else if(info[i].species === "werewolf"){
    return "hombre lobo"
  }else if(info[i].species === "ghost"){
    return "fantasma"
  }else if(info[i].species === "half-giant"){
    return "semigigante"
  }
}

  return (
    <li className={`character ${info[i].house.toLowerCase()}`}>
        <Link to={`/character/${info[i].id}`}>
          <img src={info[i].image !== "" ? info[i].image : HogwartsCrest} alt={info[i].name} className="character_image"/>
          <h4>{info[i].name}</h4>
          <p>{translation()}</p>
        </Link>
    </li>
  )
}

Character.propTypes = {
  info: PropTypes.array,
  i: PropTypes.number,
};

export default Character