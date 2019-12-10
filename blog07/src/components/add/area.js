import React, { Component } from "react";


class Area extends Component {
  
  render() {
    return <div className="col-sm-6">
    <textarea
      value={this.props.mark}
      className="form-control"
      rows={16}
      onChange={e => this.props.fncEvnt(e)}
    />
  </div>;
  }
}
export default Area;