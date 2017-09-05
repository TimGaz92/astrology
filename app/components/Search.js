// Include React
var React = require("react");
// Include React
var Query = require("./Search/Query");
var helpers = require("../utils/helpers");

var Results= require("./Search/Results");
// Create the Header component
var Search = React.createClass({
	getInitialState: function(){
		return{
			results:{}
		};
	},

	// setQuery: function(newQuery,newStart, newEnd){

	// 	 helpers.getHoroscope(newQuery,newStart,newEnd).then(function(data) {
		 
	// 	 	//this.setState({ results : {docs: data.docs}});
	// 	 	console.log("HORO returned data ->" );
	// 	 	console.log(data);
	// 	 	console.log("HORO  this data ->" );
	// 	 	console.log(this);

	// 	 	console.log("HORO  this.props data ->" );
	// 	 	console.log(this.props);

	// 	 	this.setState({ results : {docs: data}});
	// 	 	console.log("results ->" + this.props.results)
	// 	 }.bind(this));
	// },

	setMatchQuery: function(maleJson,femaleJson){

		 helpers.getMatchMakingResults(maleJson,femaleJson, 
		 	function(error, data)
		 	{
		 	//.then(function(data) {
		 
		 	//this.setState({ results : {docs: data.docs}});

		 	this.setState({ results : {docs: data}});
		 	console.log("returned data ->" );
		 	console.log(data);
		 	console.log("this data ->" );
		 	console.log(this);

		 	console.log("this.props data ->" );
		 	console.log(this.props);


		 	console.log("results ->" + this.props.results)
		 }.bind(this));
		// }
		// ) // helper 

	},
	  render: function() {

    return (
      <div className="main-container">

      		<Query updateSearch={this.setMatchQuery}/>
      		<Results results={this.state.results} />
      		
      </div>
   
		);
	}
});

		// Export the component back for use in other files
		module.exports = Search;