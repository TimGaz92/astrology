// Include React
var React = require("react");

var Child2 = React.createClass({
  render: function() {
    
    if ( !this.props.results.data){
      return(
        <h1>no data to display</h1>
      );  
    }

    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Today's Horoscope for </h3>
            </div>
            <div className="panel-body">
     

              {this.props.results.data.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Child2;
