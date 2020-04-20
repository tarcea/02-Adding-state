// TODO: update dependencies if needed
import React, { Component } from 'react';

// TODO: transform the following functional component into a class based component
class Article extends Component {
  constructor(props) {
    super(props);
    // TODO: set the initial state { clicked: false }
    this.state = { clicked: false };
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  articleStatus() {
    let classes = 'article';
    if (this.state.clicked) {
      classes += ' clicked';
    }
    return classes;
  }

  // TODO: listen to the click event on `.article`
  render() {
    return (
      <div className={this.articleStatus()} onClick={this.handleClick}>
        <h2 className="article-title">{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Article;
