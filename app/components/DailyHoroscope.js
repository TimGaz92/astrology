
// Include React
var React = require("react");
// Include React
var Query = require("./Horoscope/DailyHoroscopeQuery");
var helpers = require("../utils/helpers");

var Results= require("./Horoscope/DailyHoroscopeResults");
// Create the Header component
var Search = React.createClass({
	getInitialState: function(){
		return{
			results:{}
		};
	},

	setQuery: function(newSign, newPeriod){

		 helpers.getHoroscope(newSign, newPeriod).then(function(data) {
		 
		 	//this.setState({ results : {docs: data.docs}});
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