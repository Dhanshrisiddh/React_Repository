

import react, { Component } from 'react';

class Student1 extends Component {
    render() {
        return (

            <>
                <h2>Welcome to Student! Component</h2>
                <h3>Remaining Fee:{this.props.fee1}</h3>
            </>

        );


    }
}
export default Student1;