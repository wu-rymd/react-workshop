import React, {Component} from 'react';

const navbarStyle = {
    backgroundColor: "gainsboro",
    height: 20,
    padding: "10px 5px"
};

const linkStyle = {
    padding: 5,
    border: "1px solid black",
    margin: 10,
    borderRadius: 5
};

// example of functional component
function Link(props) {
    return <a href={props.to} style={linkStyle}>{props.name}</a>;
}

// example of class component
// props passed by default
class Navbar extends Component {
    componentDidMount() {
        console.log("Navbar mounted");
    }
    
    render() {
        return (
            <div style={navbarStyle}>
              <span>{this.props.websiteName}</span>
              <Link to="https://www.google.com" name="Google" />
              <Link to="https://www.bing.com" name="Bing" />
              <Link to="https://www.wikipedia.com" name="Wikipedia" />
            </div>
        );
    }

}

export default Navbar;
