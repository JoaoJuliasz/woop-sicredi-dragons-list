import React from 'react';
import { Link } from 'react-router-dom'
import './DragonConfirm.styles.scss'
const DragonConfirm = ({handleClick}) => {
    return (
        <div className="dragon-confirm-container">
            <Link to='/'>Voltar</Link>
            <button onClick={handleClick}>Salvar</button>
        </div>
    );
};

export default DragonConfirm