var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MealsSchema = new Schema(
    {
        title: { type: String, required: true, maxlength:100 },
        day: { type: [String], required: true },
        mealtype: { type: [String], required: false },
    }
)

//Virtual for Meals URL
MealsSchema
.virtual('url')
.get(function () {
 return '/meals/' + this._id;
});

//Export model
module.exports = mongoose.model('Meals', MealsSchema);