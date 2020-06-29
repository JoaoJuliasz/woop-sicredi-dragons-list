import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogged } from '../../redux/user/user.actions'
import './SignIn.styles.scss'
import InputField from '../../Components/InputField/InputField'

const SignIn = ({ user, userLogged, history }) => {
    const [login, setLogin] = useState({ username: '', password: '' })
    const [wrongLogin, setWrongLogin] = useState(false)
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
            setWrongLogin(true)
        }
    }
    return (
        <div className="sign-in-container">
            <div className='sign-in-align'>
                <h2>Sign In</h2>
                <form className="sign-in-form">
                    <InputField shrinkvalidation={username} handleChange={handleChange} labelValue="Username:" type="text" name="username"/>
                    <InputField shrinkvalidation={password} handleChange={handleChange} labelValue="Password:" type="password" name="password" />
                    <input className="submit-form-button" onClick={handleClick} type="submit" value="Submit" />
                    {
                        wrongLogin ? <p>Usuário e/ou senha inválidos</p> : <></>
                    }
                </form>
            </div>
        </div>
    )
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