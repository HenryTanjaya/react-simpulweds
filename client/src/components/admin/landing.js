import React,{Component} from 'react';
import { reduxForm , Field, change } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class AdminLanding extends Component {
  constructor(props){
    super(props)
    this.state={update:true};
  }

  handleFormSubmit(values){
    const newLanding = {...values};
    if(values.homephoto instanceof Array){
      newLanding.homephoto=values.homephoto
    } else {
      newLanding.homephoto=values.homephoto.split(',');
    }
    if(values.photo instanceof Array){
      newLanding.photo=values.photo
    } else {
      newLanding.photo=values.photo.split(',');
    }
    console.log(newLanding);
    this.props.updateLanding(newLanding);
  }

  renderField(field){
    return (
      <div>
        <input {...field.input} type={field.type} className="form-control" style={{fontSize:'1.3rem'}}/>
      </div>
    )
  }

  componentDidUpdate(){
    if(this.state.update){
      this.props.change('landing', 'photo', this.props.landing.photo);
      this.props.change('landing', 'homephoto', this.props.landing.homephoto);
      this.props.change('landing', 'film', this.props.landing.film);
      this.setState({update:false})
    }
  }

  componentWillMount(){
    this.props.fetchLanding();
  }

  render(){
    const {handleSubmit} = this.props
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} style={{fontSize:'1.3rem'}} className="container">
        <fieldset className="form-group">
          <label>Home Photo :</label>
          <Field name="homephoto" component={this.renderField}  type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Film : </label>
          <Field name="film" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Photo : </label>
          <Field name="photo" component={this.renderField} type="text" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Update Landing</button>
      </form>
    )
  }
}

function mapStateToProps(state,ownProps){
  return({
    landing:state.landing
  })
}

export default reduxForm({
  form:'landing',
  fields:['photo','homephoto','film']
})(connect(mapStateToProps,{...actions,change})(AdminLanding));
