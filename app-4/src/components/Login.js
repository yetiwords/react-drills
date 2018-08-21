import React, {Component} from 'react'


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
        usernameHandler(val) {
            this.setState({username: val}) 
        }
        passwordHandler(val) {
            this.setState({password: val}) 
            console.log(this.state.password);
        }
        alertFunction() {
            window.alert(`Name: ${this.state.username} Password: ${this.state.password}`)
        }

    render( ) {    
    return (
            <div>
            <input onChange={(e) => this.usernameHandler(e.target.value)}></input>
            <input onChange={(e) => this.passwordHandler(e.target.value)}></input>
            // <button onClick={() => this.alertFunction() }>Login</button> 
            </div>
        )
    }
}