import React from 'react'

class GistRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        let result = this.props.gist
        console.log("Checkk")
        console.log(result.lenght)
        return (<tr>
                    <td>{result.updated_at}</td>
                    <td>w</td>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                </tr> 
            );
    }
}
 
export default GistRow;