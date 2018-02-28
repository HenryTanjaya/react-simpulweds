import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


class HeaderLanding extends Component {
  renderLinks(){
    if(this.props.authenticated){
      return [
        <li className="nav-item" key={7}>
          <Link className="nav-link" to="/admin">Dashboard</Link>
        </li>,
        <li className="nav-item" key={8}>
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
        ]
    } else {
      return [
        <li className="nav-item px-3" key={5}>
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>,
        <li className="nav-item px-3" key={6}>
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      ];
    }
  }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar pt-2">
        <Link to="/" className="navbar-brand pr-3">
            <img src="../../style/img/logo.png" className="img-fluid" style={{height:'50px'}}></img>
        </Link>
        <button className="navbar-toggler pr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item px-3" key={1}>
              <Link className="nav-link" to="#">Photo</Link>
            </li>
            <li className="nav-item px-3" key={2}>
              <Link className="nav-link" to="#">Film</Link>
            </li>
            <li className="nav-item px-3" key={3}>
              <Link className="nav-link" to="/memories">Memories</Link>
            </li>
            <li className="nav-item px-3" key={4}>
              <Link className="nav-link" to="#">Contacts</Link>
            </li>
              {this.renderLinks()}
            </ul>
            <ul className="navbar-nav" >
              <li className="nav-item px-3">
                  <a className="nav-link" href="#">Facebook</a>
              </li>
              <li className="nav-item pl-3">
                  <a className="nav-link" href="#">Instagram</a>
              </li>
            </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated:state.auth.authenticated
  }
}

export default connect(mapStateToProps)(HeaderLanding);
