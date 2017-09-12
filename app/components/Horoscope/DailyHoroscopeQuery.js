
var React = require("react");
var helpers = require("../../utils/helpers.js");
// query component
var Query=React.createClass({
//set the intial components
	getInitialState: function() {
		helpers.getCurrentUser().then(function(currentUser){
			console.log("in DailyHoroscopeQuery, getInitialState - currentUser");
			console.log(currentUser.data.sign_1);
			this.setState({sign: currentUser.data.sign_1});
			console.log(this);
		}.bind(this));
			return{
				period:"today",
				sign: "Enter Your Sign",
			};
	},
				 // currentUser.data.sign_1

	handleChange: function(event) {
		console.log("CHANGES IN TEXT");

		var newState={};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	handleSubmit : function(event) {
		event.preventDefault();
		console.log("in DailyHoroscopeQuery.js handleSunbit Clicked");
		this.props.updateSearch(this.state.sign, this.state.period);
	},
	// render the query
	render: function() {
		console.log("in DailyHoroscopeQuery, render");
		console.log(this);
		// if (!this.data){
		// 	this.data.sign_1 = "Enter Your Sign"
		// };
		return(
			<div className= "main-container">
				{/*<div className="now">
				 <div className="col-lg-12">

				 	<div className="panel-panel-primary">
				 		<div className="panel-heading">
				 			<h1 className="panel-title">
				 			
				 			</h1>
				 		</div>
				 	</div>
				 </div>
				</div>*/}
                    <div className="panel-body">

				 {/* association of text box input with state values*/}
				<form onSubmit={this.handleSubmit}>
				 	<div className="form-group">
				 		<h4 className=""><strong>Sign</strong></h4>
					 		<input
					 		 type="text"
					 		 value={this.state.sign}
					 		 className="form-control"
					 		 id="sign"
					 		 onChange={this.handleChange}
					 		 required/>

					 	<h4><strong>For (Today/Tomorrow)</strong></h4>
						 	<input 
						 	type="text"
						 	value={this.state.period}
						 	className="form-control"
						 	id="period"
						 	onChange={this.handleChange}
						 	required/>

					 	<button className="btn btn-submit" type="submit">Show Horoscope  </button>
					 </div>
					</form>
				</div>
			</div>
			)
	}

})
module.exports= Query;

