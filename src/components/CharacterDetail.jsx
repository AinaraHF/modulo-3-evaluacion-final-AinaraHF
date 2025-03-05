import PropTypes from "prop-types";
import "../styles/CharacterDetail.scss"
import HogwartsCrest from "../images/HogwartsCrest.webp"

function CharacterDetail({ data }) {

  const translateSpecies = () => {
    if(data.species === "human"){
     return "humano"
  }else if(data.species === "werewolf"){
    return "hombre lobo"
  }else if(data.species === "ghost"){
    return "fantasma"
  }else if(data.species === "half-giant"){
    return "semigigante"
  }
}
    return (
    <article className={`details ${data.house.toLowerCase()} `}>
            <img src={data.image !== "" ? data.image : HogwartsCrest} alt={data.name} className="details_image" />
            <div className="details_text">
                <h4 className="details_text-h4">{data.name}</h4>
                <p>Especie: {translateSpecies()}</p>
                <p>Casa: {data.house}</p>
                <p>Género: {data.gender === "female" ? "femenino" : "masculino"}</p>
                <p>Estado: {data.alive ? "vivo" : "muerto 💀"}</p>
                <p>Apodo: {data.nickname.length !== 0 ? `${data.nickname[0]}` : "no tiene apodo"}</p>
            </div>
        
    </article>
  )
}

CharacterDetail.propTypes = {
  data: PropTypes.object,
};

export default CharacterDetail
