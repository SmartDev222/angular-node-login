const db = require("../models");

const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Login

exports.create = (req, res) => {
	//Validate request
	if(!req.body.title){
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	const user = {
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false
	};

	//Save user in the database
	User.create(user)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || "Some error occured while creating the user"
		});
	});
};

// Retrieve all users from the database.

exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: {[Op.like]: `%${title}%`}} : null;

	User.findAll({where: condition})
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || "Some error occured while retrieving users."
		});
	});
};

// Find a single user with an id

exports.findOne = (req, res) => {
	const id = req.params.id;

	User.findByPK(id).then(data => {
		if(data) {
			res.send(data);
		}
		else {
			res.status(500).send({message: err.message || "Some error occured while retrieving a user"})
		}
	})
};

// Update a user by the id in the request

exports.update = (req, res) => {

};

// Delete all users from the database

exports.deleteAll = (req, res) => {

};

// Find all published users

exports.findAllPublished = (req, res) => {

};