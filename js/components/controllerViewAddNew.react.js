//
var React = require('react');
var Router = require('react-router').Router;

var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
// var hashHistory = require('react-router').hashHistory;

var AddNew = React.createClass({
  handleClick: function(){
    console.log('handleClick');
    //
    //this.context.router.push('/see');
    this.props.history.push('/see');
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  render: function(){
    //console.log('AddNew : Lawnchair',Lawnchair);
    var that = this;

    /*
    router: React.PropTypes.object.isRequired,
    router: React.PropTypes.func.isRequired,
    */

    //debugger;
    console.log('render:context:',this.context);
    //
    var handleClick = function(e){
      //e.nativeEvent.preventDefault();

      //debugger;
      console.log('Handleclick',e);
      //that.props.history.push('/see');
      /* props.history` and `context.history` are deprecated. Please use `context.router`
       http://tiny.cc/router-contextchanges
      */
      console.log('that.context.router:',that.context.router);
      that.context.router.push('/see');

      //browserHistory.push('home.html#/see');
      //browserHistory.replace('home.html#/see');
      //browserHistory.push('/');

      /*
      //with a location descriptor object
      router.push({
        pathname: '/users/12',
        query: { modal: true },
        state: { fromDashboard: true }
      });
      */
      //debugger;

      //Router.push('/see');
      return false;
    };
    //
    return (
      <div className="twelve columns" router={this.context.router}>
        <div>
          <label>Note</label>
    			<textarea className="u-full-width" placeholder="New note ..." id="newAddress"></textarea>
    			<input className="button-primary" type="button" value="Save"></input>
        </div>
        <div>
          <Link to='/see' className="button button-red"> See All Link </Link>
          <button className="btn" onClick={handleClick}>See All Button</button>
        </div>
      </div>
    );
  }
});
module.exports = AddNew;
