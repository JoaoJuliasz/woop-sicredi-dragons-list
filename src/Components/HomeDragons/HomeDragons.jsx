import React from 'react'
import { Link } from 'react-router-dom'
import './HomeDragons.styles.scss'
const HomeDragons = ({ dragon, handleClick }) => {
    return (
        <div className="home-dragons-container ">
            <Link className="update-dragon-link" to={`/dragon/${dragon.id}`}>
                <img src={require("../../assets/background.png")} alt="dragon" />
                <h2>{dragon.name}</h2>
            </Link>
            <button onClick={() => handleClick(dragon.id)}>Delete</button>
        </div>
    );
};
export default HomeDragons