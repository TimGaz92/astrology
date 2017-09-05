var React= require("react");
// query component
var Query=React.createClass({
//set the intial components
	getInitialState: function() {
		return{
			search :"Aries",
			start:"today",
			end:"55",
				 maleData: {
				    'date': 25,
				    'month': 12,
				    'year': 1974,
				    'hour': 4,
				    'minute': 0,
				    'latitude': 25.123,
				    'longitude': 82.34,
				    'timezone': 5.5
				},

				// create female data
				 femaleData: {
				    'date': 27,
				    'month': 1,
				    'year': 1992,
				    'hour': 12,
				    'minute': 10,
				    'latitude': 25.123,
				    'longitude': 82.34,
				    'timezone': 5.5
				}		
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
		//this.props.updateSearch(this.state.search, this.state.start, this.state.end);
		this.props.updateSearch(this.state.maleData, this.state.femaleData);
	},
	// render the query
	render: function() {
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
				 	<div className="col-md-4">
				 	<h4 className=""><strong>MALE </strong></h4>
				 		<h4 className=""><strong>Date</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.date}
					 		 className="form-control"
					 		 id="date"
					 		 onChange={this.handleChange}
					 		 required/>   

				 		<h4 className=""><strong>Month</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.month}
					 		 className="form-control"
					 		 id="month"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Year</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.year}
					 		 className="form-control"
					 		 id="maledata.year"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Hour</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.hour}
					 		 className="form-control"
					 		 id="hour"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Minute</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.minute}
					 		 className="form-control"
					 		 id="minute"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Latitude</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.latitude}
					 		 className="form-control"
					 		 id="latitude"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Longitude</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.longitude}
					 		 className="form-control"
					 		 id="longitude"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Timezone</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.timezone}
					 		 className="form-control"
					 		 id="timezone"
					 		 onChange={this.handleChange}
					 		 required/>   
					 	</div>

{/*====================================END OF MALE ===================================*/}

				 	<div className="col-md-4">
				 	<h4 className=""><strong>FEMALE </strong></h4>
				 		<h4 className=""><strong>Date</strong></h4>
					 		<input
					 		 type="integer"
					 		 value={this.state.femaleData.date}
					 		 className="form-control"
					 		 id="date"
					 		 onChange={this.handleChange}
					 		 required/>   

				 		<h4 className=""><strong>Month</strong></h4>
					 		<input
					 		 type="integer"
					 		 value={this.state.femaleData.month}
					 		 className="form-control"
					 		 id="month"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Year</strong></h4>
					 		<input
					 		 type="integer"
					 		 value={this.state.femaleData.year}
					 		 className="form-control"
					 		 id="femaleData.year"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Hour</strong></h4>
					 		<input
					 		 type="integer"
					 		 value={this.state.femaleData.hour}
					 		 className="form-control"
					 		 id="hour"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Minute</strong></h4>
					 		<input
					 		 type="integer"
					 		 value={this.state.femaleData.minute}
					 		 className="form-control"
					 		 id="minute"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Latitude</strong></h4>
					 		<input
					 		 type="integer"
					 		 value={this.state.femaleData.latitude}
					 		 className="form-control"
					 		 id="latitude"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Longitude</strong></h4>
					 		<input
					 		 type="integer"
					 		 value={this.state.femaleData.longitude}
					 		 className="form-control"
					 		 id="longitude"
					 		 onChange={this.handleChange}
					 		 required/>   
				 		<h4 className=""><strong>Timezone</strong></h4>
					 		<input
					 		 type="integer"
					 		 value={this.state.femaleData.timezone}
					 		 className="form-control"
					 		 id="timezone"
					 		 onChange={this.handleChange}
					 		 required/>   
					 	</div>

{/*====================================END OF FEMALE ===================================*/}




					 	<button type="submit">[he] Match-it! [she]   </button>
					 </div>
					</form>
				</div>
			</div>
			)
	}

})
module.exports= Query;

