import React, {Component} from 'react';

const resultsStyle = {
    padding: 15,
    border: "1px solid green",
    margin: "20px 10px",
    borderRadius: 5
}

class Results extends Component {
    componentDidMount() {
        console.log("Results mounted");
    }
    
    render() {
        return (
            <div style={resultsStyle}>
              <h3> Form submitted! </h3>
              <p><b>Name: </b> {this.props.data.name} </p>
              <p><b>Alias: </b> {this.props.data.alias} </p>
              <p><b>Birthday: </b> {this.props.data.birthday} </p>
            </div>
        );
    }
}

export default Results;
