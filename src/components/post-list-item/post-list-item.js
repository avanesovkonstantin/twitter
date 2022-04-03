import React from "react";

import './post-list-item.css';

const PostListItem = ({label}) => {
    return (
    <li className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label">
            {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
           
            <button className="btn-star btn-sm" type="button">
                <i className="bi-star"></i>
            </button>

            <button className="btn-trash btn-sm" type="button">
                <i className="bi-trash2"></i>
            </button>

            <i className="fa-heart bi-heart-fill"></i>
        </div>
    </li>)
}

export default PostListItem;