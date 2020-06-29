import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLoggedOff } from '../../redux/user/user.actions'
import './Header.styles.scss'
const Header = ({ user, userLoggedOff }) => {
    console.warn(userLoggedOff)
    if (user) {
        return (
            <div className="header-container">
                <Link to='/'>Home</Link>
                <Link to='/create-dragon'>Create</Link>
                <Link to='/' onClick={userLoggedOff}>Sign out</Link>
            </div>
        )
    } else {
        return <></>
    }
}
const mapStateToProps = state => {
    return {
        user: state.user.userLogged
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userLoggedOff: () => dispatch(userLoggedOff())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)