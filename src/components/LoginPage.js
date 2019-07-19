import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

class LoginPageComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(userActions.logout());
    }

    handleChange(name, event) {
        const { value } = event.target;
        this.setState({[name]:value});
    }

    handleSubmit(e) {
        const { username, password } = this.state;
        e.preventDefault();
        this.setState({submitted:true});
        this.props.dispatch(userActions.login(username, password));
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input 
                            id="username" 
                            type="text" 
                            className="form-control username" 
                            name="username" 
                            onChange={event => this.handleChange("username", event)} 
                        />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            className="form-control password" 
                            name="password" 
                            onChange={event => this.handleChange("password", event)}
                        />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { }
}

export const LoginPage = connect(
    mapStateToProps
)(LoginPageComponent);

export { LoginPage as TestLoginPage };
