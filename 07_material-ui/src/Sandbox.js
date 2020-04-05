import React, {Component} from 'react';
import {
    Button,
    CircularProgress,
    Switch,
    TextField
} from '@material-ui/core';

const contentStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

class Sandbox extends Component {
    componentDidMount() {
        console.log("Sandbox mounted");
    }

    render() {
        return (
            <div style={contentStyle}>
              <h1>Material UI Sandbox</h1>
              <h3>Experimenting with Material UI components.</h3>
              <hr />
              
              <Button color="primary" size="large">Hello World</Button>
              <Button color="primary"
                      size="large"
                      variant="outlined">Hello World</Button>
              <CircularProgress />
              <Switch color="primary" />
              <TextField label="Name" />
              <TextField
                  error
                  id="standard-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
              />
            </div>
        );
    }
}

export default Sandbox;
