import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import ChildHeader from './ChildHeader/ChildHeader.js';

class Header extends Component {

   constructor() {
      super();
   }

   render() {
      const { classes } = this.props;
      return (
         <header id="home" className={classes.heigthHeader}>

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>
         </header>
      );
   }
}

export default withStyles(styles)(Header);
