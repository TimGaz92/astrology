var React= require("react");
// query component
var Query=React.createClass({
//set the intial components
	getInitialState: function() {
		return{
			place :"New York",
			DOB:"01/01/2001"
		};
	},

	handleChange: function(event) {
		console.log("CHANGES IN TEXT");

		var newState={};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	handleSubmit : function(event) {
		event.preventDefault();
		console.log("Clicked");
		this.props.updateSearch(this.state.place, this.state.DOB);
	},
	// render the query
	render: function() {
		return(
			<div className= "main-container">
			
                    <div className="panel-body">

				 {/* association of text box input with state values*/}
				<form onSubmit={this.handleSubmit}>
				 	<div className="form-group">
				 		<h4 className=""><strong>Place of Birth</strong></h4>
					 		<input
					 		 type="text"
					 		 value={this.state.place}
					 		 className="form-control"
					 		 id="place"
					 		 onChange={this.handleChange}
					 		 required/>

					 	
					 	<button type="submit">Get GEO data  </button>
					 </div>
					</form>
				</div>
			</div>
			)
	}

})
module.exports= Query;

