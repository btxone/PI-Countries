import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";
import { Link } from "react-router-dom";
import CountryCard from "../CardCountry/CardCountry";


export default function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    
    useEffect(() => {
        dispatch(getCountries());
    }, []);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }

    return (
        <div>
            <Link to="/countries">Crear actividad</Link>
            <h1>Aguante los paises</h1>
            <button onClick={handleClick}>Volver a cargar paises</button>
        <div>
            <select>
                <option value= 'asc'>Ascendente</option>
                <option value= 'desc'>Descendente</option>
            </select>
            <select>
                <option value= 'name'>Nombre</option>
                <option value= 'population'>Poblacion</option>
                <option value= 'area'>Area</option>
                <option value= 'capital'>Capital</option>
                <option value= 'continent'>Continente</option>
                <option value= 'subregion'>Subregion</option>
                <option value= 'activities'>Actividades</option>
            </select>
        </div>

            <select>
                <option value= 'all'>Todos</option>
                <option value= 'creados'> Creados</option>
                <option value= 'api'>Existente</option>
            </select>
            {
                allCountries.map((country) => {
                    return (
                        <fragment className='card'>
                            <Link to={'/home/' + country.id}>
                        <CountryCard
                            key={country.id}
                            name={country.name}
                            continent={country.continent}
                            image={country.image}
                            id={country.id}
                        />  
                        </Link>
                        </fragment>
                    )
                })
                
            }
    

            
        </div>
    )
    
    
}




