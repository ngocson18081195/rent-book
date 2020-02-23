import React, { Component } from 'react';
import Header from '../Header';
import ReactGA from 'react-ga';
import Footer from '../Footer';
import Contact from '../Contact.js';
import './detailBook.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import Testimonials from '../Products/Testimonials';

class detailBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(thisSelf) {
    Axios.get(`./resumeData.json`).then(function (respone) {
      thisSelf.setState({ resumeData: respone.data });
    }).catch(function (error) {
      console.log(error);
    }).then(function () {
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
    // this.getResumeData();
  }
  render() {
    return (

      <div className="App">
        <Header data={this.state.resumeData.main} />
        <div className="card">
          <div className="">
            <div className=" row">
              <div className="preview col-md-7">
                <div className="slider">
                  {/* start imgae background default */}
                  <img className="imgBook" src="http://placekitten.com/400/259" checked="checked" />
                  {/* end imgae background default */}

                  <input type="radio" name="slide_switch" id="id1" />
                  <label htmlFor="id1">
                    <img src="http://placekitten.com/400/259" width="100" />
                  </label>
                  <img className="imgBook" src="http://placekitten.com/400/259" />

                  <input type="radio" name="slide_switch" id="id2" />
                  <label htmlFor="id2">
                    <img src="http://placekitten.com/400/253" width="100" />
                  </label>
                  <img className="imgBook" src="http://placekitten.com/400/253" />

                  <input type="radio" name="slide_switch" id="id3" />
                  <label htmlFor="id3">
                    <img src="http://placekitten.com/400/254" width="100" />
                  </label>
                  <img className="imgBook" src="http://placekitten.com/400/254" />

                  <input type="radio" name="slide_switch" id="id4" />
                  <label htmlFor="id4">
                    <img src="http://placekitten.com/400/255" width="100" />
                  </label>
                  <img className="imgBook" src="http://placekitten.com/400/255" />

                </div>
              </div>
              <div className="details col-md-5">
                <h3 className="product-title">Tàn Khốc Mới Là Thanh Xuân</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">Từ xưa tới nay người thế gian cũng thường dùng những lời tốt đẹp nhất để ca ngợi thanh xuân. Nhưng thanh xuân có lúc không như vậy, luôn có rắn độc nấp sau những khóm hoa diễm lệ. Cho nên thanh xuân cũng có mặt tàn khốc của nó – áp lực công việc, niềm bất an trong tình cảm, cảm giác vô định trong cuộc sống, sự đả kích của thất bại, nỗi cô đơn ấm ức khi bị lừa gạt… Những điều đấy đã khiến các bạn trẻ không tìm được phương hướng, thậm chí còn gây ra các hành vi rất cực đoan..</p>
                <h4 className="price">Giá cho thuê: <span>$180</span></h4>
                <div className="action">
                  <button className="add-to-cart  btn-default" type="button">Đặt Thuê</button>
                  <button className="like btn-default" type="button"><span className="fa fa-heart"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default detailBook;