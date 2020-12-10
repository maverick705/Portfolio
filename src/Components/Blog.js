import React, { Component } from 'react';

class Blog extends Component {
  render() {

    if(this.props.data){
      var blogs = this.props.data.blogs.map(function(blogs){
        var projectImage = 'images/blog/'+blogs.image;
        return <div key={blogs.title} className="columns blog-item">
           <div className="item-wrap">
            <a href={blogs.url} title={blogs.title}>
               <img alt={blogs.title} src={projectImage} />
               <div className="overlay">
                  <div className="blog-item-meta">
                 <h5>{blogs.title}</h5>
                     <p>{blogs.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="blog">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Blog Posts</h1>

            <div id="blog-wrapper" className="bgrid-quarters s-bgrid-thirds cf" >
                {blogs}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Blog;
