import React, { Component } from 'react';
import Header from '../Header';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Footer from '../Footer';
import Contact from '../Contact.js';

class detailBook extends Component {
    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          resumeData: {}
        };
    
        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
    
      }
    
      getResumeData(){
        $.ajax({
          url:'../public/resumeData.json',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({resumeData: data});
          }.bind(this),
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }
    
      componentDidMount(){
        this.getResumeData();
      }
    render() {

        const img_big_wrap_img ={
            height: "450px",
            width: "auto",
            display: "inline-block",
            cursor: "zoom-in",
        }

        const img_big_wrap_item_gallery ={
            width: "60px",
            height: "60px",
            border: "1px solid #ddd",
            margin: "7px 2px",
            display: "inline-block",
            overflow: "hidden"
        }

        const gallery_wrap_img_small_wrap ={
            "text-align": "center"
        }

        const gallery_wrap_img_small_wrap_img ={
            'max-width': "100%",
            'max-height': "100%",
            'object-fit': "cover",
            'border-radius': "4px",
            'cursor': "zoom-in",
        }




        return (
            <div className="container">
                <div className="card">
                    <div className="row">
                        <aside className="col-sm-5 border-right">
                            <article className="gallery-wrap"> 
                                <div className="img-big-wrap">
                                    <div> <a href="#"><img style={img_big_wrap_img} src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"/></a></div>
                                <div className="img-small-wrap" style={gallery_wrap_img_small_wrap}>
                                    <div className="item-gallery" style={gallery_wrap_img_small_wrap_img}> <img style={img_big_wrap_item_gallery} src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"/> </div>
                                    <div className="item-gallery" style={gallery_wrap_img_small_wrap_img}> <img style={img_big_wrap_item_gallery} src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"/> </div>
                                    <div className="item-gallery" style={gallery_wrap_img_small_wrap_img}> <img style={img_big_wrap_item_gallery} src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"/> </div>
                                    <div className="item-gallery" style={gallery_wrap_img_small_wrap_img}> <img style={img_big_wrap_item_gallery} src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"/> </div>
                                </div>
                                </div>
                            </article>
                        </aside>
                    </div>  
                </div>
            </div>
        );
    }
}

export default detailBook;