import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchDragons, } from '../../redux/dragons/dragons.actions'
import './Home.styles.scss'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import HomeDragons from '../../Components/HomeDragons/HomeDragons'

const Home = ({ isLoading, dragons, fetchDragons, user }) => {
    const [searchBar, setSearchBar] = useState('')
    useEffect(() => {
        fetchDragons()
    }, [])

    const handleChange = event => {
        setSearchBar(event.target.value)
    }
    const handleClick = id => {
        if(window.confirm('Are you sure you want to remove this dragon?')){
        axios.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
            .then(res => {
                console.warn(res.data)
                fetchDragons()
            })
        }
    }

    const filteredDragon = dragons.filter(dragon => dragon.name.toLowerCase().includes(searchBar.toLowerCase()))
    console.warn()
    if (user) {
        return (
            <>
                {
                    isLoading ?
                        <LoadingSpinner />
                        :
                        <div className="home-container">
                            <input type="text" className="dragons-search-field" onChange={handleChange} placeholder="Found your dragon..." />
                            {filteredDragon != '' ?
                                <div className="dragons-container">
                                    {filteredDragon.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                                        .map(dragon =>
                                            <HomeDragons key={dragon.id} dragon={dragon} handleClick={handleClick}/>
                                        )}
                                </div>
                                :
                                <h2>No dragons show...</h2>
                            }
                        </div>
                }
            </>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)