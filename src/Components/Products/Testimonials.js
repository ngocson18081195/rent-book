import React, { Component } from 'react';
import "./products.css";
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class Testimonials extends Component {

   constructor(props) {
      super(props);
      this.state = {
         buy: false,
         resumeData: {}

      }
      this.buyP = this.buyProduct.bind(this);
      this.getResumeData = this.getResumeData.bind(this);

   }

   buyProduct = () => {
      const buyProduct = this.state.buy;
      this.setState({
         buy: !buyProduct
      })
   }

   getResumeData(thisSelf) {
      Axios.get(`./resumeData.json`).then(function (respone) {
         thisSelf.setState({ resumeData: respone.data });
      }).catch(function (error) {
         console.log(error);
      }).then(function () {
      })
   }

   componentDidMount() {
      this.getResumeData(this);
   }

   listBook = (dataBook) => {
      let list = null;
      if (dataBook.projects) {
         list = dataBook.projects.map((data, index) => {
            return <figure key={data.id}>
               <img src={data.image} alt="" />
               <figcaption>{data.title}</figcaption>
               <span className="price">{data.price}</span>
               <button className="button" onClick={this.buyProduct}>Buy Now</button>
            </figure>
         })

      }
      return list;
   }

   render() {
      console.log(this.state);

      if (this.state.buy) {
         return <Redirect from="/products" to="/product/detail" />
      }
      // console.log(this.props.data);

      var { portfolio } = this.state.resumeData;
      if (!portfolio) {
         portfolio = [];
      }

      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">
                  <div id="wrap">
                     <div id="columns" className="columns_4">
                        {/* {testimonials} */}
                        {/* <button onClick={this.buyProduct}> ádasd</button> */}
                        {this.listBook(portfolio)}
                     </div>
                  </div>
               </div>

            </div>
         </section>
      );
   }
}

export default Testimonials;
