import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {userLogged} from '../../redux/user/user.actions'
import './SignIn.styles.scss'

const SignIn = ({ user, userLogged, history }) => {
    const [login, setLogin] = useState({ username: '', password: '' })
    const { username, password } = login

    const handleChange = event => {
        const { name, value } = event.target
        setLogin({ ...login, [name]: value })
    }

    const handleClick = event => {
        const { username, password } = user.adminLogin
        event.preventDefault()
        if (username == login.username && password == login.password) {
            userLogged()
            history.push('/')
        } else {
            console.warn('Usuario invalido')
        }
    }
    return (
        <div className="sign-in-container">
            <div className='sign-in-align'>
                <form className="sign-in-form">
                    <div className="credential-container">
                        <input className='login-input' onChange={handleChange} type="text" name="username" />
                        <label className={`${username ? 'shrink' : ''} form-input-label`}>Username:</label>
                    </div>
                    <div className="credential-container">
                        <input className='login-input' onChange={handleChange} type="password" name="password" />
                        <label className={`${password ? 'shrink' : ''} form-input-label`}>Password:</label>
                    </div>
                    <input className="submit-form-button" onClick={handleClick} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogged: () => dispatch(userLogged())
    }
}
// SignIn = withRouter(SignIn)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))