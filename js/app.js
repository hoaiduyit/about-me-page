import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/content-head/Header'
import Body from './component/content-body/Body'
import Footer from './component/footer/Footer'

class App extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));