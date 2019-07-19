import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class AlertComponent extends Component {
    render() {
        const { type, message } = this.props;
        return (
            <div className={`alert fixed-top ${type}`} role="alert">
                {message}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { alert } = state;
    return {
        type: alert.type,
        message: alert.message
    };
}

const Alert = connect(mapStateToProps)(AlertComponent);

export { Alert };
