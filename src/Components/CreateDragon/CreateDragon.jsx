import React, { useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import {fetchDragons} from '../../redux/dragons/dragons.actions'
import { connect } from 'react-redux';
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
                    console.log(res);
                })
            history.push('/')
            fetchDragons()
        }
    }
    console.warn(id)
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label>Dragon name:</label>
                    <input onChange={handleChange} type="text" name="name" value={name} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label>Dragon type</label>
                    <input onChange={handleChange} type="text" name="type" value={type} />
                </div>
                <div>
                    <Link to='/' style={{ padding: '10px' }} >Vem</Link>
                    <button to='/' onClick={handleClick} style={{ padding: '10px' }}>Salvar</button>
                </div>
            </div>
        </div>
    );
};

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateDragon));