import axios from 'axios';
import {reset} from 'redux-form';
import {browserHistory} from 'react-router';
import {AUTH_USER,AUTH_ERROR,UNAUTH_USER,FETCH_LANDING,UPDATE_LANDING,FETCH_PORTFOLIO_INDEX,FETCH_PORTFOLIO_SHOW,UPDATE_PORTFOLIO,NEW_PORTFOLIO,REMOVE_PORTFOLIO,SEND_FORM} from './types';
var ROOT_URL='http://simpulweds.com';
const hostname = window && window.location && window.location.hostname;
if(hostname==="localhost"){
  ROOT_URL='http://localhost:3090'
}

export function signinUser(values){
  const {email,password} = values;
  return function(dispatch){
    //submit email to server
    axios.post(`${ROOT_URL}/api/user/signin`,{email,password})
      .then(response=>{
        //=if good
        //-update state to indicate user authenticare
        dispatch({type:AUTH_USER});
        //-save jwt token
        localStorage.setItem('token',response.data.token)
        //-redirect to the route /feature
        browserHistory.push('/admin');
      })
      .catch(()=>{
        //=if bad
        //show an error
        dispatch(authError('Bad login info'));
      })
  }
}

export function signupUser(values){
  const {email,password} = values;
  return function(dispatch){
    //submit email to server
    axios.post(`${ROOT_URL}/api/user/signup`,{email,password})
      .then(response=>{
        //=if good
        //-update state to indicate user authenticare
        dispatch({type:AUTH_USER});
        //-save jwt token
        localStorage.setItem('token',response.data.token)
        //-redirect to the route /feature
        browserHistory.push('/admin');
      })
      .catch(()=>{
        //=if bad
        //show an error
        dispatch(authError('Bad login info'));
      })
  }
}

export function authError(error){
  return {
    type:AUTH_ERROR,
    payload:error
  }
}

export function signoutUser(){
  localStorage.removeItem('token');
  return {type:UNAUTH_USER};
}

export function fetchLanding(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/api/landing`)
    .then(response =>{
      dispatch({
        type:FETCH_LANDING,
        payload:response.data.Landing
      })
    })
  }
}

export function updateLanding(values){
  return function(dispatch){
    axios.post(`${ROOT_URL}/api/landing`,values,{
      headers:{authorization:localStorage.getItem('token')}
    })
    .then(() => {
      dispatch({
        type:UPDATE_LANDING
      })
      browserHistory.push({
          pathname: '/admin',
          state: {
              message: "Success Update"
          }
      });
    })
    .catch(()=>{
      dispatch(authError('Bad update'))
    })
  }
}

export function fetchPortfolioIndex(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/api/portfolio`)
    .then(response =>{
      dispatch({
        type:FETCH_PORTFOLIO_INDEX,
        payload:response.data
      })
    })
  }
}

export function fetchPortfolioShow(id){
  return function(dispatch){
    axios.get(`${ROOT_URL}/api/portfolio/${id}`)
    .then(response =>{
      dispatch({
        type:FETCH_PORTFOLIO_SHOW,
        payload:response.data
      })
    })
  }
}

export function newPortfolio(values){
  const {image,image_slideshow,groom,bride,video,paragraph} = values;
  return function(dispatch){
    //submit email to server
    axios.post(`${ROOT_URL}/api/portfolio/new`,values,{
      headers:{authorization:localStorage.getItem('token')}
    })
      .then(response=>{
        dispatch({
          type:NEW_PORTFOLIO
        })
        browserHistory.push({
            pathname: '/admin',
            state: {
                message: "Success Update Portfolio",
            }
        });
      })
      .catch(()=>{
        //=if bad
        //show an error
        dispatch(authError('Bad login info'));
      })
  }
}

export function removePortfolio(values,id){
  return function(dispatch){
    axios.delete(`${ROOT_URL}/api/portfolio/${id}`,values,{
      headers:{authorization:localStorage.getItem('token')}
    })
    .then(() => {
      dispatch({
        type:REMOVE_PORTFOLIO
      })
      browserHistory.push({
          pathname: '/admin',
          state: {
              message: "Success Delete Portfolio"
          }
      });
    })
    .catch(()=>{
      dispatch(authError('Bad update'))
    })
  }
}

export function updatePortfolio(values,id){
  return function(dispatch){
    axios.post(`${ROOT_URL}/api/portfolio/${id}`,values,{
      headers:{authorization:localStorage.getItem('token')}
    })
    .then(() => {
      dispatch({
        type:UPDATE_PORTFOLIO
      })
      browserHistory.push({
          pathname: '/admin',
          state: {
              message: "Success Update Portfolio"
          }
      });
    })
    .catch(()=>{
      dispatch(authError('Bad update'))
    })
  }
}

export function sendForm(values){
  return function(dispatch){
    //submit email to server
    axios.post(`${ROOT_URL}/api/landing/form`,values)
      .then(response=>{
        dispatch({
          type:SEND_FORM
        })
        dispatch(reset('landing'))
          browserHistory.push({
              pathname: '/',
              state: {
                  message: "Success Update Portfolio"
              }
          })
      })
  }
}
