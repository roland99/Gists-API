import React from 'react';
import Button from 'react-bootstrap/Button';
import * as API from "./api/gist-api";
import GistTable from './components/gist-table';
import SearchBar from './components/search-bar';

class GistContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            resultGists:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(user) {
        let user2 = 'anders';
        console.log("Asta am primit");
        console.log(user)
        return API.getPublicGists(user, (result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                console.log("Successfully updated client with id: ");
                console.log(result);
                this.setState({
                    resultGists: result
                });
            } else {
                this.setState(({
                    errorStatus: status,
                    error: error
                }));
            }
        });
    }

    render() { 
        return ( <div>
                    <div style={{justifyContent: 'center'}} >
                        <SearchBar userName={this.state.userName} onUserSubmit={this.handleSubmit}></SearchBar>
                    </div>
                    <button onClick={this.handleSubmit}>Da</button>

                    <div>
                        <GistTable gists={this.state.resultGists}></GistTable>
                    </div>

                </div> );
    }
}
 
export default GistContainer;