import React, { Component } from 'react'
import { Button } from "semantic-ui-react";
import Typist from "react-typist";
import { Link } from 'react-router-dom';


class Home extends Component {
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
      "Meditation",
      "Cooking"
    ];
    return (
      <div className="hero-textbox">
        <h1>FREE NYC</h1>
        <h2>
          I want to learn{" "}
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
          <Link to='/home' style={{ margin: "50px auto" }}>
            <Button color="blue" primary size="massive" >Find Free Classes Now</Button>
          </Link>
      </div>
    )
  }
}

export default Home;