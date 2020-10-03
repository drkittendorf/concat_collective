const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// Create the structure of concat's User DB
const userSchema = new Schema({
    // stores the name of the user as a string
    name: { type: String, required: true },
    // stores email information
    email: { type: String, required: true },
    //! need arrays to store card and snippet arrays
    // userBookmarks: [ Schema.Types.ObjectId, ref: 'resource' ],
    // userSnippets:  [ Schema.Types.ObjectId, ref: 'snippet' ]
});
// Defines the resource schema from above
const User = mongoose.model("User", userSchema);
// Exports the Resource schema
module.exports = User;