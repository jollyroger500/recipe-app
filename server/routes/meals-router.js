const express = require('express')

const MealsCtrl = require('../controllers/meals-ctrl')

const mealsRouter = express.Router()

mealsRouter.post('/meals', MealsCtrl.createMeals)
mealsRouter.put('/meals/:id', MealsCtrl.updateMeals)
mealsRouter.delete('/meals/:id', MealsCtrl.deleteMeals)
mealsRouter.get('/meals/:id', MealsCtrl.getMealsById)
mealsRouter.get('/meals', MealsCtrl.getMealss)

module.exports = mealsRouter
