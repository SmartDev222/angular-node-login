module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("login", {
		title: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		published: {
			type: Sequelize.BOOLEAN
		}
	});

	return User;
};