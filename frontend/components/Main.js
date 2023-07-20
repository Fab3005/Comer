import React, {useState} from 'react';
import './CSS/recipes.css';
import mouth from './mouthWater.svg';
import Axios from 'axios';
import Recipe from './recipes';
import {v4 as uuidv4} from 'uuid'

const Main = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);


    const APP_ID = "d6bb1603";
    const APP_KEY ="7f39ceff0583b7659fe98fceff4cd81e";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        const result = await Axios.get(url);
        setRecipes(result.data.hits);
        console.log(result);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        getData();
    }

    const onChange = (event) => {
        setQuery(event.target.value)
    }

    return(
        <div className="Main">
            <img src={mouth} className="hungry-person" alt="hungry man"/>
            <h1>{`Que Quieres Comer? ${query}`}</h1>
            <form onSubmit={onSubmit} className='recipe-form'>
                <input class="textforfood" type="text" placeholder='Search Recipe' autoComplete='off' onChange={onChange} value = {query}/>
                <input class="inputforfood" type="submit" value = "search"/>
            </form>
            <div className='recipes'>
                {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe}/>)}
            </div>
        </div>
    )
}

export default Main;