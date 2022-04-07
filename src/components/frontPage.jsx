import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class FrontPage extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <div className='position-absolute top-50 start-50 translate-middle'>
          <h1>Launch on time,</h1>
          <h2>look on-trend.</h2>
          <p>save counless hours of design and development</p>
          <div className='d-grid gap-2 d-md-block'>
            <button className='btn btn-primary m-2'>Test</button>
            <button className='btn btn-dark'>Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
