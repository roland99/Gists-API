import React from 'react'
import Table from 'react-bootstrap/Table';
import GistRow from './gist-row';

import * as API from "../api/gist-api";

class GistTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableRows: []
        }
        //this.retrieveTheForks = this.retrieveTheForks.bind(this);
    }

    // retrieveTheForks(id){
    //     //let id2 = '6cad326836d38bd3a7ae'
    //         return API.getForksOfGist(id, (result, status, error) => {
    //             if (result !== null && (status === 200 || status === 201)) {
    //                 // console.log("Successfully updated client with id: ");
    //                     console.log(result);
    //                 this.setState({
    //                     forksL: result
    //                 });
    //             } else {
    //                 this.setState(({
    //                     errorStatus: status,
    //                     error: error
    //                 }));
    //             }
    //         });
    //     }

    // componentDidMount(){
    //     const rows = []
        
    //     this.props.gists.forEach((gist) =>{
    //         let forks = []


    //         forks = this.retrieveTheForks(gist.id);
    //         console.log(forks);
    //         console.log("Stop");
    //         rows.push(
    //             <GistRow
    //             gist={gist}
    //             forkList = {forks}
    //             key={gist.url} />
    //         );
    //         //console.log(forks);
    //     })
    //     this.setState({
    //         tableRows: rows
    //     })
    //     //console.log(rows[0].props);
    // }

    render() {
        const rows = [];

        this.props.gists.forEach((gist) => {
            //const fork = this.retrieveTheForks(gist.id);
            //console.log(fork);
            rows.push(
                <GistRow
                gist={gist}
                //forkList = {forks}
                key={gist.url} />
            );
          
        });
        
    
        return (
            <div >
          <Table striped bordered hover variant="dark" size='sm'>
            <thead>
              <tr>
                <th>Last update</th>
                <th>File name</th>
                <th>Description</th>
                <th style={{width:"20%"}}>Forks</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          </div>
        );
      }
}
 
export default GistTable;