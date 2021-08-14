const Reserve = require("../models/reserve.model");

module.exports.findAllReserves = (req, res) => {
    Reserve.find()
        .then(allDaReserves => res.json({ Reserves: allDaReserves }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleReserve = (req, res) => {
    Reserve.findOne({ _id: req.params.id })
        .then(oneSingleReserve => res.json({ Reserve: oneSingleReserve }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.createNewReserve = (req, res) => {
    Reserve.create(req.body)
        .then(newlyCreatedReserve => res.json({ Reserve: newlyCreatedReserve }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingReserve = (req, res) => {
    Reserve.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedReserve => res.json({ Reserve: updatedReserve }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingReserve = (req, res) => {
    Reserve.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

