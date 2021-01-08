const { Schema } = require("mongoose");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema(
 {
  title: {type: String, required: true, maxlength:100},
  ingredients: {type: String, required:true, maxlength:100},
  portions: {type:String, required:true, maxlength:100},
 }
);

// Export Model
module.exports = mongoose.model('Recipe', RecipeSchema);