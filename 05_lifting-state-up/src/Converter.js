import React, {Component} from 'react';
import FooBarInput from "./FooBarInput";

const converterStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

function toBar(foo) {
    return foo * 2;
}

function toFoo(bar) {
    return bar / 2;
}

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            unit: "foo"
        } // holds most recent change, one "source of truth"
    }
    
    componentDidMount() {
        console.log("Converter mounted");
    }

    handleFooChange = (newValue) => {
        this.setState({
            value: newValue,
            unit: "foo"
        });
    }

    handleBarChange = (newValue) => {
        this.setState({
            value: newValue,
            unit: "bar"
        });
    }

    render() {
        const currValue = this.state.value;
        const currUnit = this.state.unit;
        const foo = (currUnit === "bar" ? toFoo(currValue) : currValue);
        const bar = (currUnit === "foo" ? toBar(currValue) : currValue);
        
        return (
            <div style={converterStyle}>
              <h1>Converter</h1>
              <h3>Exploring lifting state up.</h3>
              <p>Conversion: 1 foo = 2 bar</p>

              <FooBarInput
                  unit="foo"
                  value={foo}
                  onChange={this.handleFooChange} />
              <FooBarInput
                  unit="bar"
                  value={bar}
                  onChange={this.handleBarChange} />
            </div>
        );
    }
}

export default Converter;
