import PropTypes from "prop-types";
import "../styles/Character.scss"
import HogwartsCrest from "../images/HogwartsCrest.webp"
import { Link } from "react-router-dom"

function Character({ info, i }) {

  return (
    <li className={`character ${info[i].house.toLowerCase()}`}>
        <Link to={`/character/${info[i].id}`}>
          <img src={info[i].image !== "" ? info[i].image : HogwartsCrest} alt={info[i].name} className="character_image"/>
          <h4>{info[i].name}</h4>
          <p>{info[i].species}</p>
        </Link>
    </li>
  )
}

Character.propTypes = {
  info: PropTypes.array,
  i: PropTypes.number,
};

export default Character