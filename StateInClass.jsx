// import React, { Component } from 'react';

// class StateInClass extends Component {

//     constructor() {
//         super();
        
//         this.name = "Snehal";

//         this.state = {
//             nameInState : "Nikita"
//         }
//     }

//     changeName(){
//         console.log(this.name);
//         this.name = "Snehal Pujari";
//         console.log(this.name);
       
//     }

//     changeStateName(){
//         console.log(this.state.nameInState);

//         this.setState({nameInState : "Nikita Pujari"});

//         console.log(this.state.nameInState);
//     }

//     render() {
//         return (
//             <>
//                 <h2>React withought using State</h2>
//                 <h3> Name Value using Normal Variable: {this.name}</h3>

//                 <button onClick={this.changeName.bind(this)}>Change Name</button>

//                 <h2>React using State</h2>
//                 <h3> Name Value using State: {this.state.nameInState}</h3>

//                 <button onClick={this.changeStateName.bind(this)}>Change State Name</button>
//             </>
//         );
//     }
// }

// export default StateInClass;

import React, {Component} from 'react';

class StateInClass extends Component {
    constructor(){
        super();
            this.name="vaish";
        
    }
    


changeName(){
    console.log(this.name)
    this.name="Vaishnavi";
    console.log(this.name);
}

render(){
    return(
    <>
      <h2>Without using state</h2>
      <h2>using normal variable:{this.name}</h2>
      <button onClick={this.changeName.bind(this)}>Change Name</button>
    </>
    
    )
 }
}

export default StateInClass;