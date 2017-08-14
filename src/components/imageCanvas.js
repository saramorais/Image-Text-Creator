import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ImageCanvas extends Component {

  constructor(props) {
    super(props);
  }


//WHEN IMAGE IS UPLOADED, CANVAS IS CREATED AND IMAGE AND/OR TEXT ADDED TO IT
  componentWillReceiveProps(nextProps) {
   
    //CREATE CANVAS WITH IMAGE
    let canvasImage = ReactDOM.findDOMNode(this.refs.canvasImage);
    let ctxImage = canvasImage.getContext('2d');
    let imageUp = nextProps.image;
    ctxImage.canvas.width = 500;
    ctxImage.canvas.height = 500;

    //ADD IMAGE TO CANVAS
    let newImage = new Image();
    newImage.src = imageUp;
    newImage.onload=function(){
      ctxImage.canvas.width = 500;
      ctxImage.canvas.height = 500;
      ctxImage.drawImage(newImage,0,0);
    }
  }


  render() {
    return (
      <div>
        <canvas className="canvasImage" ref="canvasImage" />
      </div>
    );
  }

}