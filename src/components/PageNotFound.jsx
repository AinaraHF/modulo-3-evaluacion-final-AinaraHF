import PageNotFoundImg from "../images/notfound.png"
import "..//styles/PageNotFound.scss"

function PageNotFound() {

  return (
    <img src={PageNotFoundImg} alt="Page Not Found" className="notfound"/>
  )
}

export default PageNotFound