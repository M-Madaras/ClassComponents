import React, { Component } from "react";

class ClassComponent extends Component {

    //props
    // setting state
    constructor(props) {
        super(props)

        this.state = {
            count: props.count,
            coffee: []
        }
    }
    // use effect
    componentDidMount() { 
        console.log('component Did Mount')
        let url = "https://api.sampleapis.com/coffee/hot";
        fetch(url)
            .then(res => res.json())
            .then(data =>
                this.setState({
                    count: this.state.count,
                    coffee: data
                })
            )
    }
     // the return
    render() {
        return (
            <>
                <h1>This is a Class Component {this.state.count}</h1>
                <button onClick={() => {
                    // updating the count by+1
                    this.setState(
                        {
                            count: this.state.count + 1,
                            coffee: this.state.coffee
                        })
                }}>Add One</button>
                {/* map through coffee */}
                {this.state.coffee.map(
                    coffee =>
                        <h1 key={coffee.id}>{coffee.title}</h1>
                )}
            </>
        )
    }

}

export default ClassComponent