import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Admin from './components/admin';
import RequireAuth from './components/auth/require_auth';
import Landing from './components/landing';
import PortfolioIndex from './components/portfolio/portfolio_index';
import PortfolioShow from './components/portfolio/portfolio_show';
import AdminLanding from './components/admin/landing';
import AdminPortfolio from './components/admin/portfolio';
import AdminPortfolioEdit from './components/admin/portfolio_edit';
import AdminPortfolioNew from './components/admin/portfolio_new';
import reducers from './reducers';
import {AUTH_USER} from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if(token){
  store.dispatch({type:AUTH_USER})
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing}/>
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="admin" component={RequireAuth(Admin)} />
        <Route path="admin/landing" component={RequireAuth(AdminLanding)} />
        <Route path="admin/memories" component={RequireAuth(AdminPortfolio)} />
        <Route path="admin/memories/new" component={RequireAuth(AdminPortfolioNew)} />
        <Route path="admin/memories/:id" component={RequireAuth(AdminPortfolioEdit)} />
        <Route path="memories" component={PortfolioIndex} />
        <Route path="memories/:id" component={PortfolioShow} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#app'));
