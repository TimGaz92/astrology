
var axios = require("axios");

var helper = {

	getNewReading: function(newReading){

		return axios.get("/api", {newReading: newReading});
	}


};
module.exports = helper;