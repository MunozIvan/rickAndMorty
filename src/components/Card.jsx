import { Link } from "react-router-dom";
import "./Card.css"

export default function Card(props) {
   return (
      <div className="card">
         <button onClick={()=>props.onClose(props.id)}>X</button>
         <Link className="linkDetail" to={`/detail/${props.id}`} >         
            <img src={props.image} className="imagen" alt='imagen personaje rick y morty' />
            <h3>{props.name}</h3>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin.name}</h2>
         </Link>
      </div>
   );
}
