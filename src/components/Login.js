import React, {Component} from 'react';

export default class Login extends Component{

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = () => {
        const {username, password} = this.state;
        const {initiateLogin} = this.props;        
        initiateLogin({username, password});
    }

    setUsername = (e) => {
        const username = e.target.value;
        this.setState({
            username
        });
    }

    setPassword = (e) => {
        const password = e.target.value;
        this.setState({
            password
        });
    }    

    render() {
        const {username, password} = this.state;
        return (
            <div className="resources-wrap">
                <section className="login-wrap">
                    <label htmlFor="access-username">Username</label>
                    <input type="text" onChange={this.setUsername} value={username} id="access-username" />
                    <label htmlFor="access-username">Password</label>
                    <input type="password" onChange={this.setPassword} value={password} id="access-password" />
                    <button type="button" onClick={this.handleLogin}>
                        Login
                    </button>
                </section>
            </div>
        );
    }
}
