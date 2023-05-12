import Card from './Card';
import "./Cards.css"

export default function Cards(props) {
   const {characters} = props
   return(
      <div className='home'>
         <h2 className='tituloCards'>Select some characters</h2>
         <div className='cards'>
            {characters.map((personaje)=>
            <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={props.onClose}
            />
            )}
         </div>
      </div>
      
   )
}
