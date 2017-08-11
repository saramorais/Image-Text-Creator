import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: ""
    }

    this.saveCanvas = this.saveCanvas.bind(this);
  }

  componentDidMount() {
  }

//WHEN IMAGE IS UPLOADED, CANVAS IS CREATED AND IMAGE AND/OR TEXT ADDED TO IT
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    // let canvasImage = ReactDOM.findDOMNode(this.refs.canvasImage);
    // let ctxImage = canvasImage.getContext('2d');
    // let canvasText = ReactDOM.findDOMNode(this.refs.canvasText);
    // let ctxText = canvasText.getContext('2d');

    // //COMBINE IMAGE AND TEXT CANVAS
    // let canvasFinal = ReactDOM.findDOMNode(this.refs.canvasFinal);
    // let ctxFinal = canvasFinal.getContext('2d');
    // ctxFinal.canvas.width = 500;
    // ctxFinal.canvas.height = 500;
    // ctxFinal.drawImage(canvasImage,0,0);
    // ctxFinal.drawImage(canvasText,0,0);

    //CREATE CANVAS WITH IMAGE
    let canvasImage = ReactDOM.findDOMNode(this.refs.canvasImage);
    let ctxImage = canvasImage.getContext('2d');
    let imageUp = nextProps.image.imagePreviewUrl;
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

    //ADD TEXT TO CANVAS
    let canvasText = ReactDOM.findDOMNode(this.refs.canvasText);
    let ctxText = canvasText.getContext('2d');
    let newText = nextProps.image.textContent;

    ctxText.canvas.width = ctxText.measureText(newText).width;
    ctxText.font = "30px Times New Roman";
    ctxText.fillText(newText,0,30);
  }

  saveCanvas() {
    console.log("hey");

    let canvasImage = ReactDOM.findDOMNode(this.refs.canvasImage);
    let ctxImage = canvasImage.getContext('2d');
    let canvasText = ReactDOM.findDOMNode(this.refs.canvasText);
    let ctxText = canvasText.getContext('2d');

    //COMBINE IMAGE AND TEXT CANVAS
    let canvasFinal = ReactDOM.findDOMNode(this.refs.canvasFinal);
    let ctxFinal = canvasFinal.getContext('2d');
    ctxFinal.canvas.width = 500;
    ctxFinal.canvas.height = 500;
    ctxFinal.drawImage(canvasImage,0,0);
    ctxFinal.drawImage(canvasText,0,0);

  }

  render() {
    return (
      <div>
        <canvas className="canvasFinal" ref="canvasFinal" />
        <canvas className="canvasImage" ref="canvasImage" />
        <canvas className="canvasText" ref="canvasText" />
        <button className="save-btn" onClick={this.saveCanvas}>Save Image</button>
      </div>
    );
  }

}