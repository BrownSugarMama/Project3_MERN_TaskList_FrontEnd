import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>ALL {this.props.allCount}</p>
        <p> HIGH IMP {this.props.highCount}</p>
        <p> IN PROCESS {this.props.ipCount} (</p>
        <p> COMPLETE {this.propos.doneCount}</p>
      </div>
    );
  }
}

export default Dashboard;
