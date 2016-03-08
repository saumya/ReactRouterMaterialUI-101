//
(function(){
  console.log('Reaction : 0.1.0');
  var React = require('react');
  var ReactDOM = require('react-dom');
  //
  var Router = require('react-router').Router;
  var Route = require('react-router').Route;
  var IndexRoute = require('react-router').IndexRoute;
  var hashHistory = require('react-router').hashHistory;
  // var browserHistory = require('react-router').browserHistory;
  //
  var AppControllerView = require('./components/controllerViewApp.react');
  var HomeControllerView = require('./components/controllerViewHome.react');
  var SeeAllControllerView = require('./components/controllerViewSeeAll.react');
  var AddNewControllerView = require('./components/controllerViewAddNew.react');
  //
  // Route declaration : type : 1
  // IndexRoute : the dafault route or the default view to render
  var routes = (
                <Route path="/" component={AppControllerView}>
                  <IndexRoute component={HomeControllerView} />
                  <Route path="see" component={SeeAllControllerView} />
                  <Route path="add" component={AddNewControllerView} />
                </Route>
              );

  /*
  // Route declaration : type : 2
  var routes = {
    path: '/',
    component: App,
    childRoutes: [
      { path: 'one', component: One },
      { path: 'two', component: Two },
    ]
  }
  */
  var App = ReactDOM.render(<Router routes={routes} history={hashHistory} />,document.getElementById('react-app'));
})();
