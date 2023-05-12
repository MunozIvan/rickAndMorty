import { useState } from "react";
import "./Searchbar.css"


export default function SearchBar(props) {

   const[id,setId]= useState("")

   function handleChanger(event){
      setId(event.target.value)
   }
   function handlerSubmit(event){
      event.preventDefault()
   }

   return (
      <form className="searchbar" onSubmit={handlerSubmit}>
         <input className="buscador" placeholder={"Search Character..."} onChange={handleChanger} value={id} type='search' />
         <button className="agregar" onClick={()=>props.onSearch(id)}>Add</button>
      </form>
   );
}
