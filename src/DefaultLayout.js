import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Footer from './Components/Footer';
// import About from './Components/About';
// import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Products/Testimonials';
// import Portfolio from './Components/Portfolio';
import Header from './Components/Header/Header';
import axios from 'axios';
class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
    this.getResumeData = this.getResumeData.bind(this);
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(thisSelf) {
    axios.get(`./resumeData.json`).then(function (respone) {
        thisSelf.setState({ resumeData: respone.data });
    }).catch(function (error) {
      console.log(error);
    }).then (function () {
      // Always exected
    })
    // $.ajax({
    //   url: '../',
    //   dataType: 'json',
    //   cache: false,
    //   success: function (data) {
    //     console.log(data);
        
    //     this.setState({ resumeData: data });
    //   }.bind(this),
    //   error: function (xhr, status, err) {
    //     console.log(err);
    //     alert(err);
    //   }
    // });
  }

  componentDidMount() {
    this.getResumeData(this);
  }
  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        {/* <About data={this.state.resumeData.main}/> */}
        {/* <Resume data={this.state.resumeData.resume}/> */}
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        <Testimonials data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default DefaultLayout;