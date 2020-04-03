import React, {Component} from 'react';
import Results from  "./Results";

const formStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // default values for form
            "name" : "",
            "alias" : "foo",
            "birthday" : "",
            // render Results component
            "submitted" : false
        }
    }
    
    componentDidMount() {
        console.log("Form mounted");
    }

    // process form values
    handleSubmit = (e) => {
        e.persist();
        e.preventDefault();
        this.setState({
            "name" : e.target.name.value,
            "alias" : e.target.alias.value,
            "birthday" : e.target.birthday.value,
            "submitted" : true,
        });
        console.log("Form submitted");
    }

    render() {
        return (
            <div>

              <div style={formStyle}>
              
                <h1>Form</h1>
                <h3>Exploring form inputs and submission. Also explores downward data flow.</h3>
                
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                  <div>
                    <span> Name: </span>
                    <input type="text" name="name" />
                  </div>
                  
                  <div>
                    <span> Choose an alias: </span>
                    <select name="alias">
                      <option value="foo">foo</option>
                      <option value="bar">bar</option>
                      <option value="foobar">foobar</option>
                    </select>
                  </div>

                  <div>
                    <span> Birthday: </span>
                    <input type="date" name="birthday" />
                  </div>

                  <button type="submit" value="Submit">Submit</button>
                </form>
              
              </div>

              {this.state.submitted && <Results data={this.state} />}
            </div>
        );
    }
}

export default Form;
