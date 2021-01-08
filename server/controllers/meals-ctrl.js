const Meals = require('../models/meals-model')

createMeals = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a meals',
        })
    }

    const meals = new Meals(body)

    if (!meals) {
        return res.status(400).json({ success: false, error: err })
    }

    meals
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: meals._id,
                message: 'Meals created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Meals not created!',
            })
        })
}

updateMeals = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Meals.findOne({ _id: req.params.id }, (err, meals) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Meals not found!',
            })
        }
        meals.name = body.name
        meals.time = body.time
        meals.rating = body.rating
        meals
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: meals._id,
                    message: 'Meals updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Meals not updated!',
                })
            })
    })
}

deleteMeals = async (req, res) => {
    await Meals.findOneAndDelete({ _id: req.params.id }, (err, meals) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!meals) {
            return res
                .status(404)
                .json({ success: false, error: `Meals not found` })
        }

        return res.status(200).json({ success: true, data: meals })
    }).catch(err => console.log(err))
}

getMealsById = async (req, res) => {
    await Meals.findOne({ _id: req.params.id }, (err, meals) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: meals })
    }).catch(err => console.log(err))
}

getMealss = async (req, res) => {
    await Meals.find({}, (err, mealss) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!mealss.length) {
            return res
                .status(404)
                .json({ success: false, error: `Meals not found` })
        }
        return res.status(200).json({ success: true, data: mealss })
    }).catch(err => console.log(err))
}

module.exports = {
    createMeals,
    updateMeals,
    deleteMeals,
    getMealss,
    getMealsById,
}
