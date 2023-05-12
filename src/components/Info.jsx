import { Link } from "react-router-dom";
import "./Info.css"



export default function Info() {
    return (
      <div className="info">
        <Link to={"/home"}><img className="titulo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="titulo rick y morty" /></Link>
        
        <Link to={"/about"} className="about"><button className="aboutButton">About </button></Link>
        
      </div>
    );
 }