import React, { Component } from 'react';
import "./BookingTicket.css";
import HangGhe from './HangGhe';
import ThongTinGhe from './ThongTinGhe';

export default class BookingTicket extends Component {
  render() {
    return (
      <div className="bookingMovie pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <h3 className="text-light display-4">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
              <p className="text-light mb-5">Màn hình</p>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div className="screen"></div>
              </div>
              <HangGhe />
            </div>
            <div className="col-4">
              <ThongTinGhe />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
