import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import {Routes, Route, useNavigate} from "react-router-dom"
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useEffect } from 'react';


function App() {

   const [characters,setCharacters] = useState([])

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'rick@mail.com';
   const PASSWORD = 'password';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
      }
   }
   useEffect(() => {
      if (access) {
        navigate('/home');
      }else{
         navigate("/")
      }
    }, [access]);

   function onSearch(id) {

      if((characters.filter((personaje)=>personaje.id===id).length)===1){

         window.alert('¡We do not accept repetited characters, WUBBA LUBBA DUB DUB!');
         return
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      }).catch(()=>{
         window.alert('¡There is no character with this ID, WUBBA LUBBA DUB DUB!')
      });
   }

   function onClose(id) {
      setCharacters(characters.filter((personaje)=>personaje.id!==id))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route exact path={"/"} element={<Form login={login}/>}/>
            <Route exact path={"/home"} element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route exact path={"/about"} element={<About/>}/>
            <Route exact path={"/detail/:id"} element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
