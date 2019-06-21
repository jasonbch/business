import React from "react"

import { Link } from "react-router-dom"

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe
        const req = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${title}`)

        const res= await req.json()
        this.setState({activeRecipe: res.drinks[0]})
    }

    render() {
        const recipe = this.state.activeRecipe
        console.log(recipe)
        console.log(recipe.strIngredient)
        

        return (
            <div className="container">
                {
                    this.state.activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                        <img className="recipe__box-img" src={recipe.strDrinkThumb} alt={recipe.strDrink}/>
                        <h3 className="active-recipe__title">{ recipe.strDrink }</h3>
                        <p className="active-recipe__website"> Ingredients:</p>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 ingredient-container">
                                    { Object.keys(recipe).map((ingredient) => {
                                        if (ingredient.startsWith("strIngredient") && recipe[ingredient] !== null)
                                            return (
                                                <div>
                                                    {recipe[ingredient] + "\n"}
                                                </div>
                                            )
                                    }) }
                                </div>
                                <div className="col-xs-5 measure-container">
                                    { Object.keys(recipe).map((measure) => {
                                        if (measure.startsWith("strMeasure") && recipe[measure] !== null)
                                            return (
                                                <div>
                                                    {recipe[measure] + "\n"}
                                                </div>
                                            )
                                    }) }
                                </div>
                            </div>
                        </div>
                        <p className="active-recipe__website"> Instruction:</p>
                        <p className="active-recipe__text"> { recipe.strInstructions }</p>
                        <button className="active-recipe__button">
                            <Link to={{ 
                                    pathname: `/`
                                }}>Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Recipe