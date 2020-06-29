import React, { useState, useEffect } from 'react'
import { withRouter, } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDragons } from '../../redux/dragons/dragons.actions'
import axios from 'axios'
import InputField from '../InputField/InputField'
import DragonConfirm from '../DragonConfirm/DragonConfirm'
import './Dragon.styles.scss'
const Dragon = ({ dragon, history, match, fetchDragons }) => {
    // const [dragon, setDragon] = useState({})
    const [dragonUpdateValues, setDragonUpdateValues] = useState({
        id: dragon.id,
        name: dragon.name,
        createdAt: new Date().toISOString(),
        type: dragon.type,
        histories: [],
    })
    const { name, type } = dragonUpdateValues

    const handleChange = event => {
        const { name, value } = event.target
        setDragonUpdateValues({ ...dragonUpdateValues, [name]: value })
    }

    const handleClick = id => {
        if (name && type) {
            axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, dragonUpdateValues)
                .then(res => {
                    console.log(res)
                })
            history.push('/')
            fetchDragons()
        }
    }

    return (
        <div className="update-dragon-container">
            <InputField shrinkvalidation={name}
                handleChange={handleChange}
                labelValue="Dragon name:"
                type="text"
                name="name"
                value={name}
            />

            <div className="dragon-creation-date">
                <label>Created dragon at: </label>
                <label>{dragon.createdAt.slice(0, 10)}</label>
            </div>

            <InputField shrinkvalidation={name}
                handleChange={handleChange}
                labelValue="Dragon type:"
                type="text"
                name="type"
                value={type} />

            <DragonConfirm handleClick={() => handleClick(dragon.id)} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDragons: () => dispatch(fetchDragons())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Dragon))