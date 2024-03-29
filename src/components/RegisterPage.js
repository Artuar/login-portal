import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class RegisterPageComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, event) {
        const { value } = event.target;
        this.setState({user: {...this.state.user, [name]:value}});
    }

    handleSubmit(event) {
        event.preventDefault();
        const { user: {username, password } } = this.state;
        this.setState({submitted: true});
        this.props.dispatch(userActions.register({username, password}));
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        className="form-control username" 
                        name="username" 
                        value={user.username || ''}
                        onChange={event => this.handleChange('username', event)}
                    />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        className="form-control password" 
                        name="password" 
                        value={user.password || ''}
                        onChange={event => this.handleChange('password', event)}
                    />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { }
}

export const RegisterPage = connect(
    mapStateToProps
)(RegisterPageComponent);

export { RegisterPage as TestRegisterPage };
