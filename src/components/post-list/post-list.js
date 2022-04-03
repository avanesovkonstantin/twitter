import React from "react";
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = () => {
    return (
        <ul className="app-list">
            <PostListItem label='Going to learn React'></PostListItem>
            <PostListItem label='That is good'></PostListItem>
            <PostListItem label='I need to break...'></PostListItem>
        </ul>
    )
}

export default PostList;