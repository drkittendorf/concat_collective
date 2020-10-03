const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId; //! Not 100% sure whether we need this...or not??


// Create the structure of concat's User DB
const userSchema = new Schema({
 // store jwt object data here
    jwt: {  
        token: String,
        email: { type: String, required: true },
        email_verified: '',
        name: { type: String, required: true },
        nickname: '',
        picture: '',
        sub: '',
        updated_at: ''
     },
    //! need arrays to store card and snippet arrays
    userBookmarks: [{
        type: Schema.Types.ObjectId, ref: 'Resource'
    }],
    userSnippets:  [{
        type: Schema.Types.ObjectId, ref: 'Snippet'
    }]
});


// Defines the resource schema from above
const User = mongoose.model("User", userSchema);
// Exports the Resource schema
module.exports = User;

// stores the name of the user as a string
    // name: { type: String, required: true },
    // stores email information
    // email: { type: String, required: true },