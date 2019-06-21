import React, { Component } from 'react'
import './App.css'
import Form from "./components/Form"
import Recipes from "./components/Recipes"

class App extends Component {
  state = {
    recipes : []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()
    const api_call = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${recipeName}`)

    const data = await api_call.json()
    this.setState({ recipes: data.drinks })
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipe")
    const recipes = JSON.parse(json)
    this.setState({recipes: recipes})
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes)
    localStorage.setItem("recipe", recipes)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        { this.state.recipes !== null && <Recipes recipes={this.state.recipes}/> }
      </div>
    )
  }
}

export default App