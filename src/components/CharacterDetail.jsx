import PropTypes from "prop-types";
import "../styles/CharacterDetail.scss"


function CharacterDetail({ data }) {

    return (
    <article className="details">
            <img src={data.image} alt={data.name} className="details_image" />
            <div className={data.house.toLowerCase()}>
                <h4>{data.name}</h4>
                <p>Species: {data.species}</p>
                <p>House: {data.house}</p>
                <p>Status: {data.alive ? "alive" : "dead 💀"}</p>
                <p>Patronus: {data.patronus}</p>
                <p>Ancestry: {data.ancestry}</p>
                <p>Nickname: {data.nickname.length !== 0 ? `${data.nickname[0]}` : "no nickname"}</p>
            </div>
        
    </article>
  )
}

CharacterDetail.propTypes = {
  data: PropTypes.object,
};

export default CharacterDetail
