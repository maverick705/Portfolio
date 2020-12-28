import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a target="_blank" rel="noopener noreferrer" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home" >Home</a></li>
            <li><a className="smoothscroll" href="#about" >About</a></li>
	         <li><a className="smoothscroll" href="#resume" >Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio" >Projects</a></li>
         </ul>
      </nav>
      <div className="row banner">
         <div className="banner-text">
            <h2 style={{color: '#ff5500', fontSize: '3em', marginBottom: '20px'}}>Welcome to my portfolio!.</h2>
            <h3 style={{color: 'white'}}>I'm Kenny Reiners, and I'm a Maryland based cybersecurity expert and software engineer.  I have a passion for cybersecurity and blockchain, and I plan on creating many React and Solidity based decentralized applications in the future. You can check them out below, or on my blog!</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   </header>
    );
  }
}

export default Header;

