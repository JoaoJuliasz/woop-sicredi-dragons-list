import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { fetchDragons } from '../../redux/dragons/dragons.actions'
import { connect } from 'react-redux'
import InputField from '../../Components/InputField/InputField'
import './CreateDragon.styles.scss'
import DragonConfirm from '../../Components/DragonConfirm/DragonConfirm'
const CreateDragon = ({ id, history, fetchDragons }) => {
    const [dragonValues, setDragonValues] = useState({ id: parseInt(id) + 1, name: '', createdAt: new Date().toISOString(), type: '', histories: [], })
    const { name, type } = dragonValues

    const handleChange = event => {
        const { name, value } = event.target
        setDragonValues({ ...dragonValues, [name]: value })
    }
    const handleClick = () => {
        if (name && type) {
            axios.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', dragonValues)
                .then(res => {
                    console.log(res)
                })
            history.push('/')
            fetchDragons()
        }
    }
    console.warn(id)
    return (
            <div className="create-dragon-container">

                <InputField shrinkvalidation={name}
                    handleChange={handleChange}
                    labelValue="Dragon name:"
                    type="text"
                    name="name"
                    value={name} />

                <InputField shrinkvalidation={type}
                    handleChange={handleChange}
                    labelValue="Dragon type:"
                    type="text"
                    name="type"
                    value={type} />
                    
                    <DragonConfirm handleClick={handleClick} />
            </div>
    )
}

const mapStateToProps = state => {
    return {
        id: state.dragons.lastId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchDragons: () => dispatch(fetchDragons())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateDragon))