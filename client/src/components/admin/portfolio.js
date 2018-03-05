import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class AdminPortfolio extends Component {
  componentWillMount(){
    this.props.fetchPortfolioIndex();
  }

  renderPortfolios(){
    if(this.props.portfolio.portfolios){
      return _.map(this.props.portfolio.portfolios,portfolio=>{
        return (
          <div>
          <li key={portfolio._id+"edit"}>
            <Link to={`/admin/memories/${portfolio._id}`}>
              {portfolio.groom}&{portfolio.bride}
            </Link>
          </li>
          </div>
        )
      })
    }
  }
  render(){
    return(
      <div>
      Memories Admin
      <ul>
        <li key={1}>
          <Link to={`/admin/memories/new`}>
          Add new memories
          </Link>
        </li>
      </ul>
        <ul className="list-group">
          {this.renderPortfolios()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
    return({portfolio:state.portfolio})
}

export default connect(mapStateToProps,actions)(AdminPortfolio);
