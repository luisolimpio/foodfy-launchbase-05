const Recipe = require("../models/Recipe")

module.exports = {
    index(req, res) {
        Recipe.all(function (recipes) {
            return res.render("admin/recipes/index", { recipes })
        })
    },

    siteHomeIndex(req, res) {
        const { filter } = req.query
        
        if(filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render("site/searchRecipe", { recipes, filter })
            })
        } else {
            Recipe.topRecipes(function (recipes) {
                return res.render("site/index", { recipes })
            })
        }
    },

    siteRecipesIndex(req, res) {
        Recipe.all(function (recipes) {
            return res.render("site/recipe", { recipes })
        })
    },

    findBy(req, res) {
        const filter = req.query

        Recipe.findBy(filter, function(recipes) {
            return res.render
        })
    },

    create(req, res) {
        Recipe.chefSelectOptions(function (options) {
            return res.render("admin/recipes/create", { chefOptions: options })
        })
    },

    show(req, res) {
        Recipe.find(req.params.id, function (recipe) {
            if (!recipe) return res.send("Recipe not found!")

            return res.render("admin/recipes/details", { recipe })
        })
    },

    edit(req, res) {
        Recipe.find(req.params.id, function (recipe) {
            if (!recipe) return res.send("Recipe not found!")

            Recipe.chefSelectOptions(function(chefOptions) {
                return res.render("admin/recipes/edit", { recipe, chefOptions })
            })
        })
    },

    post(req, res) {
        Recipe.create(req.body, function (recipe) {
            return res.redirect(`/admin/recipes/${recipe.id}`)
        })
    },

    put(req, res) {
        Recipe.update(req.body, function () {
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })
    },

    delete(req, res) {
        Recipe.delete(req.body.id, function () {
            return res.redirect("/admin/recipes")
        })
    }
}
