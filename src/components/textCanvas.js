import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class TextCanvas extends Component {

  constructor(props) {
    super(props);
  }

//WHEN IMAGE IS UPLOADED, CANVAS IS CREATED AND IMAGE AND/OR TEXT ADDED TO IT
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    //ADD TEXT TO CANVAS
    let canvasText = ReactDOM.findDOMNode(this.refs.canvasText);
    let ctxText = canvasText.getContext('2d');
    let newText = nextProps.textCont;

    ctxText.canvas.width = ctxText.measureText(newText).width;
    ctxText.font = "30px Times New Roman";
    ctxText.fillText(newText,0,30);
  }

  render() {
    return (
      <div>
        <canvas className="canvasText" ref="canvasText" />
      </div>
    );
  }

}