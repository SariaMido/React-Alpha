import React, { Component } from "react";
import Tilt from "react-parallax-tilt";

const Examples = () => {
  const myStyle = {
    width: "100%",
    height: "200px",
    border: "5px solid black",
  };

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <div className='container' id='imagesTable'>
        <div className='row'>
          <div className='col'>
            <Tilt>
              <div className='sc-bdvvtL hYeXfE'>
                <img
                  src='http://image.tmdb.org/t/p/w500/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg'
                  className='card-img-top'
                  style={myStyle}
                />
              </div>
            </Tilt>
          </div>
          <div className='col'>
            <Tilt>
              <img
                src='https://i.pinimg.com/736x/d1/d4/63/d1d46381d3c104837c94190352b4186b--beautiful-sunset-beautiful-places.jpg'
                style={myStyle}
              />
            </Tilt>
          </div>
          <div className='col'>
            <Tilt>
              <img
                src='https://ichef.bbci.co.uk/news/999/cpsprodpb/1013F/production/_122255856_6c2ea52c-9914-4444-9ec2-a8cd4e50ac60.jpg'
                style={myStyle}
              />
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
