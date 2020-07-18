import React, { Component } from "react";
import "./styles.css";
import Button from "./component/button";
import Input from "./component/input";
import { Clear } from "./component/clear";
import * as math from "mathjs";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  addInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <Input input={this.state.input} />
        </div>
        <div className="row">
          <Button handleClick={this.addInput}>7</Button>
          <Button handleClick={this.addInput}>8</Button>
          <Button handleClick={this.addInput}>9</Button>
          <Button handleClick={this.addInput}>/</Button>
        </div>

        <div className="row">
          <Button handleClick={this.addInput}>4</Button>
          <Button handleClick={this.addInput}>5</Button>
          <Button handleClick={this.addInput}>6</Button>
          <Button handleClick={this.addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addInput}>1</Button>
          <Button handleClick={this.addInput}>2</Button>
          <Button handleClick={this.addInput}>3</Button>
          <Button handleClick={this.addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addInput}>.</Button>
          <Button handleClick={this.addInput}>0</Button>
          <div className="button" onClick={() => this.handleEqual()}>
            =
          </div>
          <Button handleClick={this.addInput}>+</Button>
        </div>
        <div className="row">
          <Clear handleClear={() => this.setState({ input: "" })}>Clear</Clear>
        </div>
      </div>
    );
  }
}
