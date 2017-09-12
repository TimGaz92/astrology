// Include React
var React = require("react");
// Include React
var Query = require("./geocode/geocodeQuery");
var helpers = require("../utils/helpers");

var Results= require("./geocode/geocodeResults");
// Create the Header component
var Search = React.createClass({
	getInitialState: function(){
		return{
			results:{}
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

		 	this.setState({ results : {docs: data}});
		 	console.log("results ->" + this.props.results)
		 }.bind(this));
	},
	  render: function() {

    return (
      <div className="main-container">

      		<Query updateSearch={this.setQuery}/>
      		<Results results={this.state.results} />
      		
      		</div>
    
		);
	}
});

// Export the component back for use in other files
module.exports = Search;