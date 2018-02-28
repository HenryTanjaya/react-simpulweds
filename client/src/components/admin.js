import React,{Component} from 'react';
import {Link} from 'react-router';

class Admin extends Component {
  renderMessage(){
    if(this.props.location.state){
      return <div>{this.props.location.state.message}</div>
    }
  }

  render(){
    return(
      <div>
        Admin Page
        {this.renderMessage()}
        <Link className="nav-link" to="/admin/landing">Landing</Link>
        <Link className="nav-link" to="/admin/memories">Memories</Link>
      </div>
    )
  }
}



export default (Admin);
