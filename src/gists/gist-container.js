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
            resultGists:[],
            forks:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(user) {
        return API.getPublicGists(user, (result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                this.setState({
                    resultGists: result
                });
                //this.retrieveTheForks();
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

                    <div>
                        {this.state.resultGists.length > 0 && <GistTable gists={this.state.resultGists}></GistTable>}
                    </div>

                </div> );
    }
}
 
export default GistContainer;