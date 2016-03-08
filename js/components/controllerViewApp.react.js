//
var React = require('react');
// react-router
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
// react material-ui
var AppBar = require('material-ui/lib/app-bar') ;
var RaisedButton = require('material-ui/lib/raised-button') ;
var FlatButton = require('material-ui/lib/flat-button');

var AppControllerView = React.createClass({
  render: function(){
    var that = this;
    //
    return (
      <div className="row">
        <AppBar title="My AppBar"
          iconElementRight={<FlatButton label="Done" onClick={that.onDone} />}
          onTitleTouchTap={that.onTitleTouchTapHandle} />
          <RaisedButton label="My Button" primary={true} onClick={that.onHandleClick} />
        <nav className="u-full-width">
          <h2>The Required.</h2>
          <ul id="navlist">
            <li><Link to='/see' className="button button-red"> See All </Link></li>
            <li><Link to='/add' className="button button-red"> Add New </Link></li>
            <li><IndexLink to="/">Home</IndexLink></li>
          </ul>
        </nav>
        {
          //renders the children
          this.props.children
        }
      </div>
    );
  },
  onTitleTouchTapHandle: function(){
    // Not working ! Need to see why ?
    console.log('onTitleTouchTapHandle');
  },
  onDone: function(){
    console.log('onDone');
  },
  onHandleClick: function() {
    console.log('onHandleClick');
  }
});
module.exports = AppControllerView;
