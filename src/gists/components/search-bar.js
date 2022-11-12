import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    handleUserSubmit = (e) =>{
        e.preventDefault();
        this.props.onUserSubmit(this.state.username);
      }
    
    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    render() { 
        return (  <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={this.state.username} onChange={this.handleChange} placeholder="Enter user..." />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleUserSubmit}>
              Search
            </Button>
          </Form>);
    }
}
 
export default SearchBar;