import React,{Component} from 'react';
import { reduxForm , Field, change } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class AdminPortfolioNew extends Component {

  handleFormSubmit(values){
    const newPortfolio = {...values};
    this.props.newPortfolio(newPortfolio);
  }

  renderField(field){
    return (
      <div>
        <input {...field.input} type={field.type} className="form-control" style={{fontSize:'1.3rem'}}/>
      </div>
    )
  }


  render(){
    const {handleSubmit,fields:{image,bride,groom,paragraph,video,image_slideshow}} = this.props
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
      <button action="submit" className="btn btn-primary">New Portfolio</button>
      </form>
    )
  }
}


export default reduxForm({
  form:'portfolio',
  fields:['image','bride','groom','paragraph','video','image_slideshow']
})(connect(null,{...actions,change})(AdminPortfolioNew));
