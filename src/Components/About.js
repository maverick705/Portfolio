import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var state = this.props.data.address.state;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Ken Reiners Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <h2>Blog</h2>
            Be sure to check out my
            <a target="_blank" rel="noopener noreferrer" style={{marginBottom: '20px'}} href="https://kenreinersblog.com" >
                  <span style={{fontSize: '20px', color: '#ff5500'}}> Blog </span>
               </a>      
             as well! 
            <div className="row">
               <div className="columns contact-details">
                  <h2 style={{marginTop: '20px'}}>Contact Details</h2>
                  <p className="address">
						   <span>{name}<br />
                     </span>{state}<br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p style={{marginTop: '50px'}}>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
