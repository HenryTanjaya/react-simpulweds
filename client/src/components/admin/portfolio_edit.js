import React,{Component} from 'react';
import { reduxForm , Field, change } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class AdminPortfolioEdit extends Component {
  constructor(props){
    super(props)
    this.state={update:true};
  }

  handleFormSubmit(values,id){
    const updatePortfolio = {...values};
    updatePortfolio.image_slideshow=values.image_slideshow.split(',');
    this.props.updatePortfolio(updatePortfolio,this.props.params.id);
  }

  handleAlternate(values,id) {
    const removePortfolio = {...values};
    this.props.removePortfolio(removePortfolio,this.props.params.id);
  }

  renderField(field){
    return (
      <div>
        <input {...field.input} type={field.type} className="form-control" style={{fontSize:'1.3rem'}} />
      </div>
    )
  }

  componentDidUpdate(){
    if(this.state.update){
      this.props.change('portfolio', 'image', this.props.portfolio.portfolio.image);
      this.props.change('portfolio', 'bride', this.props.portfolio.portfolio.bride);
      this.props.change('portfolio', 'groom', this.props.portfolio.portfolio.groom);
      this.props.change('portfolio', 'video', this.props.portfolio.portfolio.video);
      this.props.change('portfolio', 'paragraph', this.props.portfolio.portfolio.paragraph);
      this.props.change('portfolio', 'image_slideshow', this.props.portfolio.portfolio.image_slideshow);
      this.setState({update:false})
    }
  }

  componentWillMount(){
    const {id}=this.props.params;
    this.props.fetchPortfolioShow(id)
  }

  render(){
    const {handleSubmit} = this.props
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} style={{fontSize:'1.3rem'}} className="container">
        <fieldset className="form-group">
          <label>Image:</label>
          <Field name="image" component={this.renderField}  type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Bride:</label>
          <Field name="bride" component={this.renderField}  type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Groom:</label>
          <Field name="groom" component={this.renderField}  type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Paragraph:</label>
          <Field name="paragraph" component={this.renderField}  type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Video:</label>
          <Field name="video" component={this.renderField}  type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Image Slideshow:</label>
          <Field name="image_slideshow" component={this.renderField}  type="text" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Update Portfolio</button>
        <button onClick={this.handleAlternate.bind(this)} action="submit" className="btn btn-primary">Delete</button>
      </form>
    )
  }
}

function mapStateToProps(state,ownProps){
  return({
    portfolio:state.portfolio
  })
}

export default reduxForm({
  form:'portfolio',
  fields:['image','bride','groom','paragraph','video','image_slideshow']
})(connect(mapStateToProps,{...actions,change})(AdminPortfolioEdit));
