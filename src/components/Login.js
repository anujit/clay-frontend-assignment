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
            <header className="masthead">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <form className="login-wrap">
                                <div className="form-group">
                                    <label htmlFor="access-username">Enter Username:</label>
                                    <input type="text" onChange={this.setUsername} value={username} id="access-username" />
                                    <button disabled={!username} className="btn btn-primary" type="button" onClick={this.handleLogin}>
                                        Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
