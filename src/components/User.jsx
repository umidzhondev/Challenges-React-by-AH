import React, { Component } from 'react';

class User extends Component {
    state = {  } 
    
    render() { 
        const { listNumber,name,model,number,deleteUser} = this.props;
        return (
            <tr className="user">
                <td>{listNumber+1}</td>
                <td>{name}</td>
                <td>{model}</td>
                <td>{number}</td>
                <td>
                    <button onClick={()=> deleteUser(listNumber)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
            </tr>
        );
    }
}
 
export default User;