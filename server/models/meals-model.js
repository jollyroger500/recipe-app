var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MealsSchema = new Schema(
    {
        title: { type: String, required: true, maxlength:100 },
        day: { type: [String], required: true },
        mealtype: { type: [String], required: false },
        recipe: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
        votes: { type: Number, min:1, max: 50, required: false}
    }
)

//Virtual for Meals URL
MealsSchema
.virtual('url')
.get(function () {
 return '/catalog/book/' + this._id;
});

//Export model
module.exports = mongoose.model('Meals', MealsSchema);