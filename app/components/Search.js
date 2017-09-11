
// Include React
var React = require("react");
// Include React
var Query = require("./Search/Query");
var helpers = require("../utils/helpers");

var Results= require("./Search/Results");

var GeoQuery = require("./geocode/geocodeQuery");
var GeoResults = require("./geocode/geocodeResults");

// Create the Header component
var Search = React.createClass({
	getInitialState: function(){
		return{
			results:{},
			GeoResults: {}
		};
	},

	setQuery: function(place, DOB,day, month){

		 console.log("GEO Address  returned data ->" + place );

		 helpers.getGeocodeAPI(place, DOB,day, month).then(function(data) {
		 
		 	console.log("HORO returned data ->" );
		 	console.log(data);
		 	console.log("HORO  this data ->" );
		 	console.log(this);

		 	console.log("HORO  this.props data ->" );
		 	console.log(this.props);

		 	this.setState({ GeoResults : {docs: data}});
		 	console.log("results ->" + this.props.results)
		 }.bind(this));
	},


	setMatchQuery: function(maleJson,femaleJson){

		 helpers.getMatchMakingResults(maleJson,femaleJson, 
		 	function(error, data)
		 	{
		
		 	this.setState({ results : {docs: data}});
		 	console.log("in Search.js returned data ->" );
		 	console.log(data);
		 	console.log("this data ->" );
		 	console.log(this);

		 	console.log("this.props data ->" );
		 	console.log(this.props);


		 	console.log("OPOPOPO<<<<<<<>>>>>>>>>>results ->" + this.props.results)
		 }.bind(this));
	

	},
	  render: function() {

    return (

      <div className="main-container">
      		
      		<Query updateSearch={this.setMatchQuery}/>
      		<Results results={this.state.results} />
      		<GeoQuery updateSearch={this.setQuery}/>
      		<GeoResults results={this.state.GeoResults} />
      	
      		
      </div>
   
		);
	}
});

		// Export the component back for use in other files
module.exports = Search;