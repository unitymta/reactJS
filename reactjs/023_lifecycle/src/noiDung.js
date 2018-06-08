import React, { Component } from 'react';

class NoiDung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps of noiDung.js ' + nextProps.name);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate of noiDung.js');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate of noiDung.js');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate of noiDung.js');
    }

    render() {
        return (
            <div>
                <h2>Hello {this.props.name}</h2>
                {console.log('sang')}
                
            </div>
        );
    }
}

export default NoiDung;