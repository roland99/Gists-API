import React from 'react'
import Table from 'react-bootstrap/Table';
import GistRow from './gist-row';

class GistTable extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
        const rows = [];
        
        this.props.gists.forEach((gist) => {
    
          rows.push(
            <GistRow
              gist={gist}
              key={gist.url} />
          );
          
        });
    
        return (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Create Date</th>
                <th>File name</th>
                <th>Badge</th>
                <th>Forks</th>
                <th>View File</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        );
      }
}
 
export default GistTable;