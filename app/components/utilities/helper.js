
var axios = require("axios");

var helper = {

	getNewReading: function(newReading){
			console.log("getting axois api");
		return axios.get("/api", {newReading: newReading});
	},

	getCurrentUser: function(){
		return axios.get("/currentuser", {currentuser: currentuser} );
	},

	getNewMatch: function(newMatch){
		return axios.get("/match", {newMatch: newMatch});
	}

};
module.exports = helper;