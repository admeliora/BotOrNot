import React from "react";
import QuoteAndAuthor from "./QuoteAndAuthor";
import GuessDisplay from "./GuessDisplay";
import PopUp from "./PopUp";
import quotes from "./database";
import "./App.css";
import Title from "./Title";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      displayAuthor: false,
      botBackground: "white",
      humanBackground: "white",
      popUp: false,
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  handleNextClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author,
      displayAuthor: false,
      botBackground: "white",
      humanBackground: "white",
    });
    this.shuffleQuotes(quotes);
  };

  handlePressOnHuman = () => {
    if (this.state.author === "bot") {
      this.setState({
        displayAuthor: true,
        humanBackground: "red",
      });
    } else {
      this.setState({
        displayAuthor: true,
        humanBackground: "green",
      });
    }
  };

  handlePressOnBot = () => {
    if (this.state.author === "bot") {
      this.setState({
        displayAuthor: true,
        botBackground: "green",
      });
    } else {
      this.setState({
        displayAuthor: true,
        botBackground: "red",
      });
    }
  };

  togglePop = () => {
    this.setState({ popUp: !this.state.popUp });
  };

  randomColor() {
    // mix random colors with white to obtain neutral pastels
    const white_r = 255;
    const white_g = 255;
    const white_b = 255;
    // generate the random color
    const rand_r = Math.floor(Math.random() * 155);
    const rand_g = Math.floor(Math.random() * 155);
    const rand_b = Math.floor(Math.random() * 155);
    // mix the color
    const red = (rand_r + white_r) / 2;
    const green = (rand_g + white_g) / 2;
    const blue = (rand_b + white_b) / 2;
    const color = `rgb(
      ${red},
      ${green},
      ${blue})`;
    return color;
  }

  render() {
    return (
      <>
        <Title />
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleNextClick}
          handleMouse={this.togglePop}
          {...this.state}
        />
        <GuessDisplay
          handleBot={this.handlePressOnBot}
          handleHuman={this.handlePressOnHuman}
          displayAuthor={this.state.displayAuthor}
          botBackground={this.state.botBackground}
          humanBackground={this.state.humanBackground}
        />
        {this.state.popUp ? <PopUp toggle={this.togglePop} /> : null}
      </>
    );
  }
}

export default App;
