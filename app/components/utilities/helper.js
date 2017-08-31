
var axios = require("axios");

var helper = {

	getNewReading: function(newReading){
			console.log("getting axois api");
		return axios.get("/api", {newReading: newReading});
	}

};
module.exports = helper;