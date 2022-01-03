import React, { Component } from 'react'
import {connect} from 'react-redux';

class HangGhe extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.BooingTicketReducer.danhSachGhe,
  }
}

export default connect(mapStateToProps)(HangGhe);
