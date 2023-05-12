import "./Detail.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch(error => {
                console.error(error);
                window.alert('Error al cargar los datos del personaje');
            });
    }, [id]);
    /*LLENAR CON MAS DATOS*/ 
    return (
        <div className="detail-container">
            <Link to={"/"}><div className="detail-overlay"/></Link>
            <div className="detail-content">
                {character && Object.keys(character).length > 0 ? (
                    <div className="tarjeta">
                        <img src={character.image} className="detailImage" alt='imagen personaje rick y morty' />
                        <div className="description">
                            <h2 className="name">{character.name}</h2>
                            <h3>Status: {character.status} - {character.species}</h3>
                            <h3>Gender: {character.gender}</h3>
                            <h3>Origin: {character.origin && character.origin.name}</h3>
                        </div>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
}