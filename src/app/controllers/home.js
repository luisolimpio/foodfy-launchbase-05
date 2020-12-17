const Chef = require("../models/Chef")
const Recipe = require("../models/Recipe")

module.exports = {
  index(req, res) {
    const { filter } = req.query
        
    if(filter) {
        Recipe.findBy(filter, function(recipes) {
            return res.render("home/searchRecipe", { recipes, filter })
        })
    } else {
        Recipe.topRecipes(function (recipes) {
            return res.render("home/index", { recipes })
        })
    }
  },

  indexRecipes(req, res) {
    Recipe.all(function(recipes) {
      return res.render("home/recipes", { recipes })
    })
  },

  indexChefs(req, res) {
    Chef.all(function(chefs) {
      return res.render("home/chefs", { chefs })
    })
  },

  show(req, res) {
    Recipe.find(req.params.id, function(recipe) {
      if(!recipe) return res.send("Recipe not found!")

      return res.render("home/recipeDetails", { recipe })
      })
  }
}