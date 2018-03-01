import React ,{Component} from 'react';
import { reduxForm ,Field,reset} from 'redux-form';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';
import * as actions from '../actions';

class Landing extends Component{
componentWillMount(){
  this.props.fetchLanding();
}

handleFormSubmit(values){
  const {resetForm} = this.props;
  const contactForm = {...values};
  this.props.sendForm(contactForm);
  alert("Your email has been send");
}
renderField(field){
  return (
    <div>
      <label>{field.alt}</label>
      <input {...field.input} type={field.type} className="form-control"/>
    </div>
  )
}


renderContact(){
  const {handleSubmit} = this.props
  return (
    <div className="row p-5" style={{height:'800px'}}>
    <ScrollableAnchor id={'contact'}>
      <div className="container" style={{margin:'auto'}}>
        <div className="row">
          <h2 className="section-heading pt-4 px-3">Contact us</h2>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <section className="section">
                <div className="row">
                    <div className="col-md-12 col-xl-12">
                        <form id="contact-form" name="contact-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <div className="row">
                                <div className="col-md-12">
                                  <fieldset className="form-group md-form">
                                    <Field name="name" component={this.renderField} type="text" alt="Name"/>
                                  </fieldset>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                  <fieldset className="form-group md-form">
                                    <Field name="email" component={this.renderField} type="text" alt="Email"/>
                                  </fieldset>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                  <fieldset className="form-group md-form">
                                    <Field name="country" component={this.renderField} type="text" alt="Country"/>
                                  </fieldset>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                  <fieldset className="form-group md-form md-textarea">
                                    <Field name="message" component={this.renderField} type="text" alt="Message"/>
                                  </fieldset>
                                </div>
                            </div>
                            <div className="center-on-small-only text-md-right">
                              <button className="btn btn-grey m-0" action="submit">Send</button>
                            </div>
                        </form>
                        <div className="status"></div>
                    </div>
                </div>
            </section>
          </div>
          <div className="col-lg-6 col-md-12">
            <h3>
              Simpul Weds
            </h3>
            <p className="paragraph">Jl. S. Parman Gg. Harapan No. 9F - 20153
            <br />Medan, North Sumatra, Indonesia
            <br />+6287766405393
            <br />simpulweds@gmail.com</p>
          </div>
        </div>
      </div>
      </ScrollableAnchor>
    </div>
  )
}

renderImage(){
  const {photo} = this.props.landing;
  var photoList=[];
  if(photo){
    var photoList = photo.map(function(photo,index){
      if(index===0){
        return(
          <div className="carousel-item active">
            <img className="d-block w-100" src={photo} key={photo} alt="Photo" />
          </div>
        )
      } else {
        return (
          <div className="carousel-item">
            <img className="d-block w-100" src={photo} key={photo} alt="Promotion" />
          </div>
        )
      }
    })
  }
  return(
    <div className="row px-3">
    <ScrollableAnchor id={'photo'}>
      <div className="container" style={{margin:'auto'}}>
        <div className="row">
          <div className="col-lg-5 col-md-12" style={{margin:'auto'}}>
            <p className="paragraph">
              When you document your love story, you put into focus the details that are uniquely you and reprioritize what’s important about your day as well as honoring your commitment to one another.
              It is also an excellent medium to showcase your story – who you are, what you love, and how you met – to all of your family and friends.
              It is a way to celebrate all the reasons you fell in love.
            </p>
          </div>
          <div className="col-lg-7 col-md-12">
            <div id="carousel-example-2z" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  {photoList}
                </div>
                <a className="carousel-control-prev" href="#carousel-example-2z" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example-2z" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
          </div>
        </div>
      </div>
      </ScrollableAnchor>
    </div>
  )

}

renderCarouselHome(){
  const {homephoto,film} = this.props.landing;
  var homephotoList=[];
  if(homephoto){
    var homephotoList = homephoto.map(function(photo,index){
      if(index===0){
        return(
          <div className="carousel-item active">
            <img className="d-block w-100" src={photo} key={homephoto} alt="Promotion" />
          </div>
        )
      } else {
        return (
          <div className="carousel-item">
            <img className="d-block w-100" src={photo} key={homephoto} alt="Promotion" />
          </div>
        )
      }
    })
  }
  return(
    <div>
    <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
          <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        {homephotoList}
      </div>
      <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
      </a>
    </div>

    <div className="logo-signature">
    	<h6>Film | Photo | Styling</h6>
    </div>

    <div className="row p-5" style={{height:'800px'}}>
    <ScrollableAnchor id={'film'}>
      <div className="container" style={{margin:'auto'}}>
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={film}></iframe>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 text-md-left">
            <p className="paragraph pt-3">
            We believe that you are the narrator of your own story.
            Your story deserves to be more than just a doctored plot; your story deserves to be a reflection of your honest, true self – and that’ s what we do here at
            Simpul Weds: a distinctively your story that depicts what matters to you.
          </p>
          </div>
        </div>
      </div>
      </ScrollableAnchor>
    </div>

    </div>
  )

}

render(){
  const {title,film,photo,homephoto} = this.props.landing;
    return(
      <div>
        {this.renderCarouselHome()}
        {this.renderImage()}
        {this.renderContact()}
      </div>
    )
  }
}

function mapStateToProps(state){
    return({landing:state.landing})
}

export default reduxForm({
  form:'landing',
  fields:['name','email','country','message']
})(connect(mapStateToProps,actions)(Landing));
