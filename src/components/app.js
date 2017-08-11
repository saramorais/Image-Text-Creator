import React, { Component } from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
      textContent: ""
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  handleTextChange(event) {
    event.preventDefault();
    this.setState({
      textContent: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Meme Creator</h1>

        <div className="previewComponent">
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this.handleImageChange(e)} />
          </form>
        </div>


        <div className="text">
          <input 
            type="text"
            value={this.state.textContent}
              onChange={this.handleTextChange} />
        </div>


        <Canvas image={this.state} />
      </div>
    );
  }

}