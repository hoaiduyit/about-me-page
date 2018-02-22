import React from 'react';
import {Modal, ModalBody, ModalHeader, ModalTitle} from 'react-bootstrap';
import PropTypes from 'prop-types';

class ModalDialog extends React.Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        component: PropTypes.element.isRequired,
        isShow: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    componentWillReceiveProps(nextProps){
        if (this.props.isShow !== nextProps.isShow){
            this.setState({
                show: true
            })
        }
    }

    handleOnCloseModal = () => {
        this.setState({
            show: false
        })
    };

    render() {

        const {title, component} = this.props;

        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleOnCloseModal}>
                    <ModalHeader closeButton>
                        <ModalTitle style={{textAlign: "center", fontSize: "20px"}}>
                            {title}
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        {component}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalDialog