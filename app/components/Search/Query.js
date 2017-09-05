var React= require("react");
// query component
var Query=React.createClass({
//set the intial components
	getInitialState: function() {
		return{
			// search :"Aries",
			// start:"today",
					
			 maleData: {
			    'date': "",
			    'month': "",
			    'year': [],
			    'hour': "",
			    'minute': "",
			    'latitude': "",
			    'longitude': "",
			    'timezone': ""
			}

				// create female data
				//  femaleData: {
				//     'date': "",
				//     'month': "",
				//     'year': 1992,
				//     'hour': 12,
				//     'minute': 10,
				//     'latitude': 25.123,
				//     'longitude': 82.34,
				//     'timezone': 5.5
				// }		
		};
	},
  

 
 	
 
	handleChange: function(event) {
		console.log("CHANGES IN TEXT");

		var newState={};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
		// updateSearch(event){
		// console.log(event.target.value);

		// this.setState({this.setState.maleData:{event.target.value}
// 	handleMaleDateYearChange (e) {
//   this.State({
//     this.setState,
//     maleData: {
//      maleData.

//       year: e.target.value
//     }
   // });
   handleMaleDateYearChange: function (e) {
	console.log("CHANGES IN TEXT");

  this.setState({
    maleData: {
      year: e.target.value
    }
  });
},

	handleSubmit : function(event) {
		event.preventDefault();
		console.log("Clicked");
		//this.props.updateSearch(this.state.search, this.state.start, this.state.end);
		this.props.updateSearch(this.state.maleData, this.state.femaleData);
	},
	updateSearch(event){
		console.log(event.target.value);
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
					 		 // onChange={this.updateSearch,bind(this)}/>
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
					 		 id="year"
					 		 onChange={this.handleMaleDateYearChange}
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
{/*}
				 	<div className="col-md-4">
				 	<h4 className=""><strong>FEMALE </strong></h4>
				 		<h4 className=""><strong>Date</strong></h4>
					 		<input
// 					 		 type="integer"
// 					 		 value={this.state.femaleData.date}
// 					 		 className="form-control"
// 					 		 id="date"
// 					 		 onChange={this.handleChange}
// 					 		 required/>   

// 				 		<h4 className=""><strong>Month</strong></h4>
// 					 		<input
// 					 		 type="integer"
// 					 		 value={this.state.femaleData.month}
// 					 		 className="form-control"
// 					 		 id="month"
// 					 		 onChange={this.handleChange}
// 					 		 required/>   
// 				 		<h4 className=""><strong>Year</strong></h4>
// 					 		<input
// 					 		 type="integer"
// 					 		 value={this.state.femaleData.year}
// 					 		 className="form-control"
// 					 		 id="femaleData.year"
// 					 		 onChange={this.handleChange}
// 					 		 required/>   
// 				 		<h4 className=""><strong>Hour</strong></h4>
// 					 		<input
// 					 		 type="integer"
// 					 		 value={this.state.femaleData.hour}
// 					 		 className="form-control"
// 					 		 id="hour"
// 					 		 onChange={this.handleChange}
// 					 		 required/>   
// 				 		<h4 className=""><strong>Minute</strong></h4>
// 					 		<input
// 					 		 type="integer"
// 					 		 value={this.state.femaleData.minute}
// 					 		 className="form-control"
// 					 		 id="minute"
// 					 		 onChange={this.handleChange}
// 					 		 required/>   
// 				 		<h4 className=""><strong>Latitude</strong></h4>
// 					 		<input
// 					 		 type="integer"
// 					 		 value={this.state.femaleData.latitude}
// 					 		 className="form-control"
// 					 		 id="latitude"
// 					 		 onChange={this.handleChange}
// 					 		 required/>   
// 				 		<h4 className=""><strong>Longitude</strong></h4>
// 					 		<input
// 					 		 type="integer"
// 					 		 value={this.state.femaleData.longitude}
// 					 		 className="form-control"
// 					 		 id="longitude"
// 					 		 onChange={this.handleChange}
// 					 		 required/>   
// 				 		<h4 className=""><strong>Timezone</strong></h4>
// 					 		<input
// 					 		 type="integer"
// 					 		 value={this.state.femaleData.timezone}
// 					 		 className="form-control"
// 					 		 id="timezone"
// 					 		 onChange={this.handleChange}
// 					 		 required/>   
// 					 	</div>

// {/*====================================END OF FEMALE ===================================*/}




					 	<button type="submit">[he] Match-it! [she]   </button>
					 </div>
					</form>
				</div>
			</div>
			)
	}

})
module.exports= Query;

