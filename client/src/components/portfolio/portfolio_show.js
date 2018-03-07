import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class PortfolioShow extends Component {
  componentWillMount(){
    const {id}=this.props.params;
    this.props.fetchPortfolioShow(id)
  }

  renderPhoto(){
    const {image_slideshow} = this.props.portfolio.portfolio;
    var photoList=[];
    if(image_slideshow){
      var photoList = image_slideshow.map(function(photo,index){
        return(
          <img src={photo} className="img-fluid pt-4" />
        )
      })
    } else {
      return(
        <div>Loading</div>
      )
    }
    return(
      <div className="col-md-9">
        {photoList}
      </div>
    )

  }
  homePortfolio(){
    const {video,image} = this.props.portfolio.portfolio
    if(!video){
      return(
        <div>
          <img src={image} className="img-fluid" key={image}/>
        </div>
      )
    } else {
      return(
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={video}></iframe>
        </div>
      )
    }
  }
  render(){
    const {portfolio} = this.props.portfolio;
    if(!portfolio){
      return <div>Loading</div>
    }
    const {groom,bride,paragraph} = this.props.portfolio.portfolio
    return(
      <div className="row p-5">
        <div className="container" style={{margin:'auto'}}>
          {this.homePortfolio()}
          <div className="row">
            {this.renderPhoto()}
            <div className="col-md-3">
              <h5 className="section-heading pt-4 mb-0">{groom} &</h5>
              <h5 className="section-heading pb-2">{bride}</h5>
            <p>
            {paragraph}
            </p>
          </div>
          </div>
          <div className="pt-4"><Link to ="/memories">Back to our memories</Link></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return({portfolio:state.portfolio})
}


export default connect(mapStateToProps,actions)(PortfolioShow);
