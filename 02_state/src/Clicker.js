import React, {Component} from 'react';

const contentStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
        };
        /* this.incrementCounter = this.incrementCounter.bind(this); */
    }
    
    componentDidMount() {
        console.log("Clicker mounted");
    }

    incrementCounter = (e) => {
        // e.persist();       // React-provided solution - remove SyntheticEvent
        // console.log(e);
        // console.log(this); // Clicker
   
        this.setState({
            counter : this.state.counter + 1
        });
    }

    render() {
        return (
            <div style={contentStyle} onClick={this.incrementCounter}>
              <h1>Stateful component</h1>
              <h3>Click on this component to update its state.</h3>
              <p> This component has been clicked: {this.state.counter} time
                { Math.abs(this.state.counter) !== 1 ? "s" : "" }
              </p>
            </div>
        );
    }
}

export default Clicker;
