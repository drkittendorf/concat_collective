const db = require("../models");

module.exports = {
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
  update: function (req, res) {
    db.User
      // .findByIdAndUpdate(req.body)
      // .findOneAndUpdate({ _id: req.params.id }, { $push: { userBookmarks:req.body } })
      // .findById({ _id: req.params.id })
      // .updateOne({_id: req.params.id }, {$push:{ userBookmarks: req.params.bookmark }})
      .findById(req.params.id)
      .update({

          userBookmarks: "code sdlfjs"
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }






};