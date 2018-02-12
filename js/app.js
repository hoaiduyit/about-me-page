import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/content-head/Header'
import Body from './component/content-body/Body'

class App extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));