import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class SaveCanvas extends Component {

  constructor(props) {
    super(props);
    this.saveCanvas = this.saveCanvas.bind(this);
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
        <button className="save-btn" onClick={this.saveCanvas}>Save Image</button>
      </div>
    );
  }

}