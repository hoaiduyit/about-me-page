import React from 'react';
import ReactDOM from 'react-dom';
import ProviderClass from './component/provider/Provider';

class App extends React.Component{

    render() {
        return (
            <div>
                <ProviderClass/>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));