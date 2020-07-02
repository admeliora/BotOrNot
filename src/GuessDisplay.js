import React from "react";

class GuessDisplay extends React.Component {
  render() {
    return (
      <>
        <button
          style={{ backgroundColor: this.props.botBackground }}
          id="guess-button"
          onClick={this.props.handleBot}
        >
          BOT
        </button>
        <button
          style={{ backgroundColor: this.props.humanBackground }}
          id="guess-button"
          onClick={this.props.handleHuman}
        >
          HUMAN
        </button>
      </>
    );
  }
}

export default GuessDisplay;
