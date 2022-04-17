import React from "react";
import './app-header.css';

const AppHeader = ({count, liked}) => {
    return (
        <div className="app-header d-flex">
            <h1>Konstantin Avanesov</h1>
            <h2>{count} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;