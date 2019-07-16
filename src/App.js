import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions } from './actions';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {

        });
    }

    render() {
        const { alert } = this.props;
        return (
                <div className="container">
                    <Router history={history}>
                        <div className="col-sm-8 col-sm-offset-2">
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                        </div>
                    </Router>
              </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { alert } = state;
    return {
        alert
    };
}

const mapDispatchToProps = dispatch => ({
    
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
