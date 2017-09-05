<<<<<<< HEAD
var axios = require('axios'); 
var Astroapi = require('./AstroSdk'); 

var helper = {
	 getHoroscope: function(sign,period){

	 	console.log("runQuery has been hit")
		var QueryURL= 'https://aztro.herokuapp.com/?day='+period+'&sign='+sign;	
		console.log("Query URL " + QueryURL);

	 return axios.post(QueryURL,{
			}).then(function(results){
				console.log("Axios HORO Results", results);
				return results.data;
		});
},

	 getMatchMakingResults: function(maleJson,femaleJson, callback){
				// //var resource = "match_ashtakoot_points";

				var resource = "match_making_report";


				// call matchMakingCall method of VRClient for matching apis and print Response
				var matchMakingData = Astroapi.matchMakingCall(resource, maleJson, femaleJson
					, function(error, result){

				    if(error)
				    {
				        console.log("Error returned!!");
				    }
				    else
				    {
				        // console.log('Response has arrived from API server --');
				        // console.log(result);
				        var jsonResult = JSON.parse(result)
				        // console.log("jsonResult");
				        // console.log(jsonResult);
				        return callback(null, jsonResult);
				    }
				} // call back
				);
				// console.log("Match data is");
				// console.log(matchMakingData);
	}
}

=======
var axios = require('axios'); 
var Astroapi = require('./AstroSdk'); 

var helper = {
	 getHoroscope: function(sign,period){

	 	console.log("runQuery has been hit")
		var QueryURL= 'https://aztro.herokuapp.com/?day='+period+'&sign='+sign;	
		console.log("Query URL " + QueryURL);

	 return axios.post(QueryURL,{
			}).then(function(results){
				console.log("Axios HORO Results", results);
				return results.data;
		});
},

	 getMatchMakingResults: function(maleJson,femaleJson, callback){
				// //var resource = "match_ashtakoot_points";

				var resource = "match_making_report";


				// call matchMakingCall method of VRClient for matching apis and print Response
				var matchMakingData = Astroapi.matchMakingCall(resource, maleJson, femaleJson
					, function(error, result){

				    if(error)
				    {
				        console.log("Error returned!!");
				    }
				    else
				    {
				        // console.log('Response has arrived from API server --');
				        // console.log(result);
				        var jsonResult = JSON.parse(result)
				        // console.log("jsonResult");
				        // console.log(jsonResult);
				        return callback(null, jsonResult);
				    }
				} // call back
				);
				// console.log("Match data is");
				// console.log(matchMakingData);
	}
}

>>>>>>> 40ff5ea7cf65288d6b76272e285add35ed5c4bea
module.exports = helper;