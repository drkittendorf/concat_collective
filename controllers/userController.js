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

    console.log(req.params)


    db.User
      // .findByIdAndUpdate(req.body)
      .findOneAndUpdate({ _id: '5f78cac568deff551fc8665d' }, { $push: { userBookmarks: req.params.id } })
      // .findById({ _id: req.params.id })
      // .updateOne({_id: req.params.id }, {$push:{ userBookmarks: req.params.bookmark }})
      // .findById(req.params.id)
      // .update({

      //     userBookmarks: "5f6f9536d016d1733295ba06"
      //   }
      // )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }






};