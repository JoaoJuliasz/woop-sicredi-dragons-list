import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDragons } from '../../redux/dragons/dragons.actions'
import axios from 'axios'
const Dragon = ({ dragon, history, fetchDragons }) => {
    const [dragonUpdateValues, setDragonUpdateValues] = useState({ id: dragon.id, name: dragon.name, createdAt: new Date().toISOString(), type: dragon.type, histories: [], })
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <label>Dragon name:</label>
                <input onChange={handleChange} name="name" type="text" value={name} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <label>Created dragon at: </label>
                <label>{dragon.createdAt.slice(0, 10)}</label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <label>Dragon type: </label>
                <input onChange={handleChange} name="type" type="text" value={type} />
            </div>
            <div>
                <Link to='/' style={{ padding: '10px' }}>Vem</Link>
                <button onClick={() => handleClick(dragon.id)} style={{ padding: '10px' }}>Salvar</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDragons: () => dispatch(fetchDragons())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Dragon));