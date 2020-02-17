import React, { Component } from 'react';
import "./products.css";

class Testimonials extends Component {
   render() {

      if (this.props.data) {
         var testimonials = this.props.data.projects.map(function (testimonials) {
            console.log(testimonials);
            return <figure>
               <img src={testimonials.image} />
               <figcaption>{testimonials.title}</figcaption>
               <span class="price">{testimonials.price}</span>
               <a class="button" href="#">Buy Now</a>
            </figure>

            {/* <img src={testimonials.image} class="img-responsive" />
               <div class="producttitle">{testimonials.title}</div>
               <div class="productprice">
                  <div class="pull-right">
                     <a href="#" class="btn btn-danger btn-sm" role="button">BUY</a>
                  </div>
                  <div class="pricetext">{testimonials.price}</div>
               </div> */}

            //   return  <li key={testimonials.user}>
            //       <blockquote>
            //          <p>{testimonials.text}</p>
            //          <cite>{testimonials.user}</cite>
            //       </blockquote>
            //    </li>
         });
      }

      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">

                  {/* <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
               </div> */}

                  {/* <div className="ten columns flex-container">
                     <ul className="slides">
                        {testimonials}
                     </ul>
                  </div>
               </div> */}


                  <div id="wrap">
                     <div id="columns" class="columns_4">
                        {/* <img src="http://placehold.it/460x250/e67e22/ffffff&text=HTML5" class="img-responsive" />
                     <div class="producttitle">Product 2</div>
                     <div class="productprice">
                        <div class="pull-right">
                           <a href="#" class="btn btn-danger btn-sm" role="button">BUY</a>
                        </div>
                        <div class="pricetext">£8.95</div>
                     </div> */}
                        {testimonials}
                        {/* <figure>
                        <img src="https://i.imgur.com/ruU04I6.jpg" />
                        <figcaption>Green Checkered Shirt</figcaption>
                        <span class="price">$44</span>
                        <a class="button" href="#">Buy Now</a>
                     </figure> */}
                     </div>
                  </div>
               </div>

            </div>
         </section>
      );
   }
}

export default Testimonials;
