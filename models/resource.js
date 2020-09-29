const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the structure of concat's Resource collection
const resourceSchema = new Schema({
    // title of the resource
    title: { type: String, required: true },
    // stores the link as a string
    link: { type: String, required: true },
    // stores category information
    category: { type: String, required: true },
    // stores the experience level
    skill: { type: String, required: true },
    // add date created for sorting purposes
    created: {type: Date, default:Date.now},
});
// Defines the resource schema from above
const Resource = mongoose.model("Resource", resourceSchema);
// Exports the Resource schema
module.exports = Resource;