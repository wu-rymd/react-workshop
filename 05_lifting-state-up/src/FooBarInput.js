import React, {Component} from 'react';

class FooBarInput extends Component {
    componentDidMount() {
        console.log("FooBarInput component for " +
                    this.props.unit + " mounted")
    }
    
    handleChange = (e) => {
        e.persist();
        this.props.onChange( e.target.value );
        // calls Component's onChange function (prop) with input value
    }
    
    render() {
        return (
            <fieldset>
              <legend>Enter value in {this.props.unit}</legend>
              <input type="number"
                     value={this.props.value}
                     onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default FooBarInput;
