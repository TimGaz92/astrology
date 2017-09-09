
var React= require("react");
// query component
var Query=React.createClass({
//set the intial components
	getInitialState: function() {
		return{
			
			 maleData: {
				    date: "",
				   	month: "",
				   	year: "",
				    hour: "",
				    minute: "",
				    latitude: "",
				    longitude: "",
				    timezone: "5.5"
			},

				
				 femaleData: {
					  date: "",
					  month: "",
					  year: "",
					  hour: "",
					  minute: "",
					  latitude: "",
					  longitude: "",
					  timezone: "5.5"
				}		
		};
	},
  


	handleMaleChange: function (e) {
		console.log("CHANGES IN TEXT");
		console.log(e.target); 
		const state = this.state
		let maleData  = state.maleData
		console.log('maleData', maleData);
		
		maleData[e.target.id] = e.target.value;
	  	this.setState({maleData: maleData});
	},
		
		handlefemaleChange: function (e) {
		console.log("CHANGES IN TEXT");
		console.log(e.target); 
		const state = this.state
		let femaleData  = state.femaleData
		femaleData[e.target.id] = e.target.value;
	  	this.setState({femaleData: femaleData});
	},


	handleSubmit : function(event) {
		event.preventDefault();
		console.log("Clicked");
		this.props.updateSearch(this.state.maleData, this.state.femaleData);
	},
	updateSearch(event){
		console.log(event.target.value);
	},
	// render the query

	render: function() {
		return(
			<div className= "main-container">
			  <div className="panel-body">

				 {/* association of text box input with state values*/}
				<form onSubmit={this.handleSubmit}>
				 	<div className="form-group">
				 	<div className="col-md-4">
				 	<h4 className=""><strong>MALE </strong></h4>
				 		<h4 className=""><strong>Date</strong></h4>
					 		<input
					 		 type="number"
					 		 value = {this.state.maleData.date}
					 		  className="form-control"
					 		 id="date"
					 		 onChange={this.handleMaleChange}
					 		 required/>
					 	<h4 className=""><strong>M
					 	onth</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.month}
					 		 className="form-control"
					 		 id="month"
					 		 onChange={this.handleMaleChange}
					 		 required/>  
					 	<h4 className=""><strong>Year</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.year}
					 		 className="form-control"
					 		 id="year"
					 		 onChange={this.handleMaleChange}
					 		 required/>  

					 		 <h4 className=""><strong>Hour</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.hour}
					 		 className="form-control"
					 		 id="hour"
					 		 onChange={this.handleMaleChange}
					 		 required/>   
				 		<h4 className=""><strong>Minute</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.minute}
					 		 className="form-control"
					 		 id="minute"
					 		 onChange={this.handleMaleChange}
					 		 required/>   
				 		<h4 className=""><strong>Latitude</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.latitude}
					 		 className="form-control"
					 		 id="latitude"
					 		 onChange={this.handleMaleChange}
					 		 required/>   
				 		<h4 className=""><strong>Longitude</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.longitude}
					 		 className="form-control"
					 		 id="longitude"
					 		 onChange={this.handleMaleChange}
					 		 required/>   
				 	{/*	<h4 className=""><strong>Timezone</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.maleData.timezone}
					 		 className="form-control"
					 		 id="timezone"
					 		 onChange={this.handleMaleChange}
					 		 required/> */}
					 	</div>


{/*====================================END OF MALE ===================================*/}

	 			 	<div className="col-md-4">
				 	 <h4 className=""><strong>FEMALE </strong></h4>
				 	 	<h4 className=""><strong>Date</strong></h4>
					  		<input
					 		 type="number"
					 		 value={this.state.femaleData.date}
					 		 className="form-control"
					 		 id="date"
					 		 onChange={this.handlefemaleChange}
					 		 required/>   

				 		<h4 className=""><strong>Month</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.femaleData.month}
					 		 className="form-control"
					 		 id="month"
					 		 onChange={this.handlefemaleChange}
					 		 required/>   
				 		<h4 className=""><strong>Year</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.femaleData.year}
					 		 className="form-control"
					 		 id="year"
					 		 onChange={this.handlefemaleChange}
					 		 required/>   
				 		<h4 className=""><strong>Hour</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.femaleData.hour}
					 		 className="form-control"
					 		 id="hour"
					 		 onChange={this.handlefemaleChange}
					 		 required/>   
				 		<h4 className=""><strong>Minute</strong></h4>
					 		<input
					 		 type="number"
					 		 value={this.state.femaleData.minute}
					 		 className="form-control"
					 		 id="minute"
					 		 onChange={this.handlefemaleChange}
					 		 required/>   
				 		<h4 className=""><strong>Latitude</strong></h4>
					 		<input
					 		 type="number"
					 		 
					 		 value={this.state.femaleData.latitude}
					 		 className="form-control"
					 		 id="latitude"
					 		 onChange={this.handlefemaleChange}
					 		 required/>   
				 		<h4 className=""><strong>Longitude</strong></h4>
					 		<input
					 		 type="number"
					 		 
					 		 value={this.state.femaleData.longitude}
					 		 className="form-control"
					 		 id="longitude"
					 		 onChange={this.handlefemaleChange}
					 		 required/>   
				 	{/*	<h4 className=""><strong>Timezone</strong></h4>
					 		<input
					 		 type="number"
					 		 
					 		 value={this.state.femaleData.timezone}
					 		 className="form-control"
					 		 id="timezone"
					 		 onChange={this.handlefemaleChange}
					 		 required/> */}  
					 	</div>

   {/*====================================END OF FEMALE ===================================*/}

				 		 					 	
					 	<button type="submit"> MATCH </button>
					 </div>
					</form>
				</div>
			</div>
			)
	}

})
module.exports= Query;

