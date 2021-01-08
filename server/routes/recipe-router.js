const express = require('express')

const RecipeCtrl = require('../controllers/recipe-ctrl')

const recipeRouter = express.Router()

recipeRouter.post('/recipe', RecipeCtrl.createRecipe)
recipeRouter.put('/recipe/:id', RecipeCtrl.updateRecipe)
recipeRouter.delete('/recipe/:id', RecipeCtrl.deleteRecipe)
recipeRouter.get('/recipe/:id', RecipeCtrl.getRecipeById)
recipeRouter.get('/recipe', RecipeCtrl.getRecipes)

module.exports = recipeRouter
