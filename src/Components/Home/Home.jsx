import React, { useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { fetchDragons, } from '../../redux/dragons/dragons.actions'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
const Home = ({ isLoading, dragons, fetchDragons, user }) => {
    useEffect(() => {
        fetchDragons()
    }, [])

    const handleClick = id => {
        if(window.confirm('Are you sure you want to remove this dragon?')){
        axios.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
            .then(res => {
                console.warn(res.data)
                fetchDragons()
            })
        }
    }

    if (user) {
        return (
            <>
                {
                    isLoading ?
                        <LoadingSpinner />
                        :
                        <>
                            <Link to='/create-dragon'>Create</Link>
                            <div>
                                {dragons.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                                    .map(dragon =>
                                        <div>
                                            <Link to={`/dragon/${dragon.id}`}><h2>{dragon.name}</h2></Link>
                                            <button onClick={() => handleClick(dragon.id)}>Delete</button>
                                        </div>
                                    )}
                            </div>
                        </>
                }
            </>
        );
    } else {
        return (
            <Redirect to='/signin' />
        )
    }

}
const mapStateToProps = state => {
    return {
        dragons: state.dragons.dragons,
        isLoading: state.dragons.isLoading,
        user: state.user.userLogged,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDragons: () => dispatch(fetchDragons())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);