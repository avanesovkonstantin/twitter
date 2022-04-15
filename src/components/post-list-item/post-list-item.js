import React from "react";

import './post-list-item.css';


class PostListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
    }

    onClickImportant = () => {

        this.setState(function (prevState, prevProps) {
            return {
                important: !prevState.important
            }
        });

    }

    onClicklike = () => {

        this.setState(function (prevState, prevProps) {
            return {
                like: !prevState.like
            }
        });

    }

    render() {

        const { label, onDelete} = this.props;
        const { important, like } = this.state;
        let className = 'app-list-item d-flex justify-content-between';
        if (important) {
            className += ' important';
        }

        if (like) {
            className += ' like';
        }

        return (
            <div className={className}>
                <span className="app-list-item-label" onClick={this.onClicklike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        onClick={this.onClickImportant}
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