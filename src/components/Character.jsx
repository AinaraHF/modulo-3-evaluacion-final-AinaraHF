import PropTypes from "prop-types";
import "../styles/Character.scss"
import { Link } from "react-router-dom"

function Character({ info, i }) {

  return (
    <li className="character">
        <Link to={`/character/${info[i].id}`} className={info[i].house.toLowerCase()}>
          <img src={info[i].image !== "" ? info[i].image : "https://placehold.co/200x300/png"} alt={info[i].name} className="character_image"/>
          <h4 className="name">{info[i].name}</h4>
          <p className="species">{info[i].species}</p>
        </Link>
    </li>
  )
}

Character.propTypes = {
  info: PropTypes.array,
  i: PropTypes.number,
};

export default Character