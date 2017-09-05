
// Include React
var React = require("react");
var Router=require('react-router');

var helpers = require('../../utils/helpers');

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
      getInitialState:function(){
            return null;
      },
  // A helper method for mapping through our articles and outputting some HTML
  renderHoroscope: function() {
    console.log("resuls---->" + this);
    console.log(this);
     // Each article thus reperesents a list group item with a known index
      return (
        <div key="55">
          <li className="list-group-item">
            <h3>
              <span>
                <em>{this.props.results.docs.description}</em> 
               </span>
            </h3>
            <p>Date Published: {this.props.results.docs.current_date}</p>
            <p> color: {this.props.results.docs.color}</p>
            <p> compatibility: {this.props.results.docs.compatibility}</p>
            <p> date_range: {this.props.results.docs.date_range}</p>
            <p> lucky_number: {this.props.results.docs.lucky_number}</p>
            <p> lucky_time: {this.props.results.docs.lucky_time}</p>
            <p> mood: {this.props.results.docs.mood}</p>


         </li>

       </div>
      );
 },

  // A helper method for rendering a container to hold all of our articles
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderHoroscope()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
      
  render: function() {
    if(!this.props.results.docs){

          return(
            <div className="main-container">
              <div className = "row">
                <div className="panel panel-primery">
                  <div className="panel-heading">
                      <h1 className= "panel-title"> <strong> <span className="glyphicon glyphicon-list.alt" aria-hidden="true"></span>Your Horoscope</strong>
                       </h1>
                  </div>
                  <div className="panel-body">
                      <h3>
                            <span className="text-center"><em>No Results yet</em></span>
                      </h3>
                            
                   </div>
                </div>
            </div>             
        </div>
          );
        }
      


      return this.renderContainer();
  
   }
});   
// Export the component back for use in other files
module.exports = Results;
