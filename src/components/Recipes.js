import React from "react"

import { Link } from "react-router-dom"

const Recipes = props => (
    <div className="container">
        <div className="row">
            { props.recipes.map((recipe) => {
                return (
                    <div key={recipe.idDrink} className="col-md-4" style={{ marginBottom: "2rem" }}>
                        <div className="recipes__box">
                            <img
                                className="recipe__box-img"
                                src={recipe.strDrinkThumb}
                                alt={recipe.strDrink}/> 
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    { recipe.strDrink.length < 20 ? `${recipe.strDrink}` : 
                                    `${recipe.strDrink.substring(0, 25)}...` }
                                </h5>
                            </div>
                            <button className="recipe__buttons">
                                <Link to={{ 
                                    pathname: `/recipe/${recipe.idDrink}`,
                                    state:{ recipe: recipe.strDrink }
                                }}>View Recipe</Link>
                            </button>
                        </div>
                    </div>
                )
            }) }
        </div>
    </div>
)

export default Recipes