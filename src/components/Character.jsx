
function Character({ info, i }) {

  return (
    <li>
        <img src={info[i].image !== "" ? info[i].image : "https://placehold.co/200x300/png"} alt={info[i].name} />
        <h4>{info[i].name}</h4>
        <p>{info[i].species}</p>
    </li>
  )
}

export default Character