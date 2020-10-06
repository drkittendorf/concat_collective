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
      .findOneAndUpdate({ _id: '5f78cac568deff551fc8665d' }, { $push: { userBookmarks: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};