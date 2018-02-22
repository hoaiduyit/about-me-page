import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';
import ContactContainer from '../../component/container/contactContainer';

class ProviderClass extends React.Component{

    render() {
        return (
            <Provider store={store}>
                <div>
                    <ContactContainer/>
                </div>
            </Provider>
        );
    }
}

export default ProviderClass