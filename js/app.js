import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/hello'

class App extends React.Component{

    render() {
        return (
            <div>
                <Hello/>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));