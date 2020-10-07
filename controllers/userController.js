const db = require("../models");

module.exports = {
  findAll: function (req, res) {
  db.User
    .find({}).select('email')
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  
  findById: function (req, res) {
  db.User
      .findById(req.params.id)
      .populate("userBookmarks")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //! creates our user, hits our usermodel
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUserBookmarks: function (req, res) {
    // lets check so we can adapt the key for the push 
    db.User
      .findOneAndUpdate(req.body , { $push: { userBookmarks: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    console.log(req.body)
    console.log(`added to the database`)
  },
  updateUserSnippets: function (req, res) {
    // lets check so we can adapt the key for the push 
    db.User
      .findOneAndUpdate(req.body , { $push: { userSnippets: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    console.log(req.body)
    console.log(`added to the database`)
  }

};