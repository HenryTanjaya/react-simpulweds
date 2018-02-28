import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class PortfolioIndex extends Component {
  componentWillMount(){
    this.props.fetchPortfolioIndex();
  }
  renderPortfolios(){
    if(this.props.portfolio.portfolios){
      return _.map(this.props.portfolio.portfolios,portfolio=>{
        return (
          <div className="col-lg-4 col-md-6 ">
            <Link to={`/memories/${portfolio._id}`} key={portfolio._id}>
            <img src={portfolio.image} className="img-fluid" />
            <p className="p-2 pb-4" style={{color:'grey'}}>{portfolio.groom} & {portfolio.bride}</p>
            </Link>
          </div>
        )
      })
    }
  }
  render(){
    return(
      <div className="row p-3">
        <div className="container" style={{margin:'auto'}}>
          <div className="row">
            <h4 className="section-heading pt-5 px-3">Memories with us</h4>
          </div>
          <div className="row">
            <p className="paragraph p-3">
            We believe that you are the narrator of your own story.
            Your story deserves to be more than just a doctored plot; your story deserves to be a reflection of your honest, true self – and that’ s what we do here at
            Simpul Weds: a distinctively your story that depicts what matters to you.
          </p>
          </div>
          <div className="row text-center">
            {this.renderPortfolios()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return({portfolio:state.portfolio})
}

export default connect(mapStateToProps,actions)(PortfolioIndex);
