import React from 'react'
import Badge from 'react-bootstrap/Badge';

import * as API from "../api/gist-api";

class GistRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forkList: []
        }
        this.retrieveTheForks = this.retrieveTheForks.bind(this);
        this.getFork = this.getFork(this);
    }

    retrieveTheForks(id){
            return API.getForksOfGist(id, (result, status, error) => {
                if (result !== null && (status === 200 || status === 201)) {
                    console.log(result);
                    this.setState({
                        forkList: result
                    });
                } else {
                    this.setState(({
                        errorStatus: status,
                        error: error
                    }));
                }
            });
        }

    componentDidMount(){
        this.retrieveTheForks(this.props.gist.id);
        let rowFork = [];
        
        
    }

    getFork(){
        console.log(this.state.forkList);
        return(
            <p>{this.state.forkList.length}</p>
        )
    }

    render() { 
        let result = this.props.gist
        let fileNames = result.files
        let rows = []
        let m = 0
        //Generating badge for each file in a Gist
        Object.keys(fileNames).forEach((name) => {
            rows.push(
                <p key={name}> <a href={fileNames[name].raw_url} target="_blank" rel="noopener noreferrer" >{name.substr(0,name.indexOf('.') +1)} </a> <Badge bg="secondary"> {name.substr(name.indexOf('.') +1)} </Badge></p>
            );
            m = m + 1
          });
    
        let rowFork = [];
        // if (this.state.forkList.lenght > 0){
        //     console.log(this.state.forkList["owner"].login);
        // }
        // this.state.forkList.forEach((fork) =>{
        //     let last3 = fork.slice(-3);
        //     rowFork.push(
        //         <p key={last3.id}>{last3["owner"].login}</p>
        //     );
        // });

        
        return (<tr>
                    <td>{result.updated_at}</td>
                    <td>{rows}</td>
                    
                    <td width="20%">{result.description}</td>
                    <td>a</td>
                </tr> 
            );
    }
}
 
export default GistRow;