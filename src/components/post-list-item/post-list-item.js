import React from "react";

import './post-list-item.css';


class PostListItem extends React.Component {

    render() {

        const { label, onDelete, important, like, onImportant, onLike } = this.props;
        let className = 'app-list-item d-flex justify-content-between';
        if (important) {
            className += ' important';
        }

        if (like) {
            className += ' like';
        }

        return (
            <div className={className}>
                <span
                    className="app-list-item-label"
                    onClick={onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        onClick={onImportant}
                        className="btn-star btn-sm"
                        type="button">
                        <i className="bi-star"></i>
                    </button>
                    <button
                        className="btn-trash btn-sm"
                        type="button"
                        onClick={onDelete}>
                        <i className="bi-trash2"></i>
                    </button>
                    <i className="fa-heart bi-heart-fill"></i>
                </div>
            </div >
        )
    }
}

export default PostListItem;