import React, {useState} from "react";
import './CSS/recipes.css';
import IM from "./Modal/IngModal";

const Recipe = ({recipe}) => {
    const [showrecipe, setShow] = useState(false);
    const {label, image, url, ingredients} = recipe.recipe;

    if(!showrecipe){
        return (
            <div className="recipesjs">
                <h2>
                    {label}
                </h2>
                <img src={image} alt={label} className="recipesimg"/>
                <a href={url} target='_blank' rel='noopener noreferrer'>Recipe Page Link</a> 
                <button onClick ={() => setShow(true)}>Ingredients</button>
            </div>
        )
    }
    else{
        return (
        <div className="recipesjs">
            <h2>
                {label}
            </h2>
            <img src={image} alt={label} className="recipesimg"/>
            <a href={url} target='_blank' rel='noopener noreferrer'>Recipe Page Link</a> 
            <button onClick ={() => setShow(true)}>Ingredients</button>
            <IM onClose={() => setShow(false)} show={showrecipe} ingredients={ingredients}/>
            
        </div>
    )
    }
   
}

export default Recipe