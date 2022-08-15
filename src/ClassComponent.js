import React, {Component} from "react";

class ClassComponent extends Component {

    constructor(props) {
        super(props)

    this.state = {
        count: props.count,
        // color: props.color
    }
    }

  render() {
    return(
        <>
        <h1>This is a Class Component {this.state.count}</h1>
        </>
    )
  }

}

export default ClassComponent