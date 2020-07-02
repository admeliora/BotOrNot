import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.displayAuthor ? this.props.author : "Who said this?"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          get another line
        </button>
        <button
          type="button"
          id="info_button"
          onMouseOver={this.props.handleMouse}
          onMouseOut={this.props.handleMouse}
        ></button>
      </div>
    );
  }
}

export default QuoteAndAuthor;
