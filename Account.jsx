
import Student from './Student'; // Adjust the path if it's in a different folder

import React,{Component} from 'react';

class Account extends Component{
    
    constructor(props){
        super(props);
        this.remainingFee=20000;
    }
    render(){
        return (
            <>

                <h1>Welcome to Account Component</h1>

                <Student fee={this.remainingFee} /> 
            </>
        )
    }
    
}
export default Account;
