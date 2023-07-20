import React from "react";
import {v4 as uuid} from 'uuid'

const Ingredients = ({ingredients}) => {


    return ingredients.map(ingredients => {
        return(
            <ul key={uuid()} className="ingredient-list">
                <li className="ingredient-text">
                    {ingredients.text}
                </li>
            </ul>
        )
    })
}

export default Ingredients;