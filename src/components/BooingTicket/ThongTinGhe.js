import React, { Component } from 'react'

export default class ThongTinGhe extends Component {
  render() {
    return (
      <div>
        <h3 className="text-light display-4 mb-5">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <div className="ghiChu mb-5">
          <div className="ghiChuItem">
            <button className="gheDuocChon mr-3"></button>
            <div className="text-light">Ghế đã đặt</div>
          </div>
          <div className="ghiChuItem">
            <button className="gheDangChon mr-3"></button>
            <div className="text-light">Ghế đang chọn</div>
          </div>
          <div className="ghiChuItem">
            <button className="gheChuaDat mr-3"></button>
            <div className="text-light">Ghế chưa đặt</div>
          </div>
        </div>
        <table className="table text-light">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Tổng tiền</td>
              <td className="text-warning">0</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
