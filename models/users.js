module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		sign_1: {
			type: DataTypes.STRING,
			allowNull:false
		},
		// zodiacsign: {
		// 	type: DataTypes.STRING,
		// 	allowNull:false
		// },
		birthdate: {
			type: DataTypes.STRING,
			allowNull: false
		},
		birthmonth: {
			type: DataTypes.STRING,
			allowNull: false
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false

		},
		status: {
			type: DataTypes.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}
	});

	return User;
}