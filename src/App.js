// React Stuff
import React from "react";
import Typist from "react-typist";
import "./App.css";

class App extends React.Component {
  state = {
    typing: true
  };

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };

  render() {
    let typedWords = [
      "Martial Arts",
      "Dancing",
      "Programming",
      "Writing",
      "Knitting",
      "Arts & Crafts",
      "Yoga",
      "Meditation"
    ];
    return (
      <div className="app">
        <div className="hero-textbox">
          <h2>
            I want to learn
            {this.state.typing ? (
              <Typist startDelay={1000} onTypingDone={this.done}>
                {typedWords.map(word => (
                  <span>
                    <span key={word}>{word}</span>
                    <Typist.Backspace count={word.length} delay={500} />
                    <Typist.Delay ms={1000} />
                  </span>
                ))}
              </Typist>
            ) : null}
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
