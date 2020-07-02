import React from "react";

export default class PopUp extends React.Component {
  handleMouse = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div class="box">
        <span onMouseOver={this.handleMouse}>&times; </span>
        <h3>THE MODEL</h3>
        <p>
          A multi-layer recurrent neural network{" "}
          <a href="https://github.com/jcjohnson/torch-rnn">(Torch-RNN)</a> was
          used to generate the "bot" lines.
        </p>
        <h3>THE CORPUS</h3>
        <p>
          A 32 MB corpus consisting of poems scraped from the Poetry Foundation
          and around a dozen other literary magazines.
        </p>
      </div>
    );
  }
}
