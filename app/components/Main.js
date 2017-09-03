// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
var helper = require("./utilities/helper.js")
var Child2 = require("./children/Child2");

var Main = React.createClass({

    getInitialState: function(){
      return {
        results: {}
      };
    },



    handleclick: function(){
      console.log("got the click");
      // helper.getCurrentUser().then(function(currentUser){

          helper.getNewReading().then(function(newReading){
            // console.log(newReading.data);
            this.setState({results: {data: newReading.data}});
            // console.log(this); 
          }.bind(this));
      // })
    },

    
  // Here we render the function
  render: function() {
    

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>Horoscope</strong></h2>
          <p><em>Show your horoscope</em></p>
          <hr />
          <p>
            
            <button onClick={this.handleclick} className="btn btn-danger btn-lg">Show Horiscope</button>
          </p>
        </div>

        <div className="row">

         <Child2 results={this.state.results} />

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
