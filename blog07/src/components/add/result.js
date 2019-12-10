import React, { Component } from "react";
import marked from "marked"



class Result extends Component {
  getMarkdownText(text) {
    var rawMarkup = marked(text);
    return { __html: rawMarkup };
  }
  render() {
    
    return <div
    className="col-sm-6"
    dangerouslySetInnerHTML={this.getMarkdownText(this.props.mark)}
  />;
  }
}
export default Result;
