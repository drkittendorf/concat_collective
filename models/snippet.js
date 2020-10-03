const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create the structure of concat's snippet collection
const snippetSchema = new Schema({
    // title of the resource
    description: { type: String, required: true },
    // stores the link as a string
    language: { type: String, required: true },
     // add date created for sorting purposes
    created: {type: Date, default:Date.now},
    // store User Object?
    // snippetUser: [{ type: Schema.Types.ObjectId, ref:'User'}],
    // stores the snippet information
    snippet: { type: String, required: true },
   
});
// Defines the resource schema from above
const Snippet = mongoose.model("Snippet", snippetSchema);
// Exports the Resource schema
module.exports = Snippet;