import React, { Component } from 'react';


const Authentication = (WrappedComponent) => {
    const EnvelopedContainer = class AuthenticationDecorator extends Component {
        render() {
            return (
                <WrappedComponent />
            );
        }
    }
    EnvelopedContainer.Component = WrappedComponent;
    return EnvelopedContainer;
}

export default Authentication;
