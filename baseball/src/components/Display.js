import React from 'react';
import ReactDOM from 'react-dom';

class Display extends React.Component {

    render() {
        return(
            <div>
                <h1>Strikes: {this.props.strike}</h1>
                <h1>Balls: {this.props.balls}</h1>
            </div>
        )
    }
}


export default Display;
