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
     // Each article thus reperesents a list group item with a known index
      return (
        <div key="55">
          <li className="list-group-item">
            <h3>
              <span>
                <em>Please use below results to get your match making </em> 
               </span>
            </h3>
            <p> Your Sign: {this.props.results.docs.sign}</p>
            <p> Lat: {this.props.results.docs.lat}</p>
            <p> Lng: {this.props.results.docs.lng}</p>
            <p> Time Zone: {this.props.results.docs.TZ}</p>
         </li>
       </div>
      );
 },

  // A helper method for rendering a container to hold all of our articles
  
  renderContainer: function() {

    return (
      <div className="main-container">
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
     );
  },
      
  render: function() {
    if(!this.props.results.docs){

          return(
            <div className="main-container">
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
          );
        }

      return this.renderContainer();
     }
});   
// Export the component back for use in other files
module.exports = Results;
