import React from "react";
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css'

const App = () => {

    const data = [
        { label: 'Going to learn React', important: true, id: 1 },
        { label: 'That is good', important: false, id: 2 },
        { label: 'I need to break....', important: false, id: 3 }
    ]

    return (

        <div className="app">
            <AppHeader></AppHeader>
            <div className="search-panel d-flex">
                <SearchPanel></SearchPanel>
                <PostStatusFilter></PostStatusFilter>
            </div>
            <PostList posts={data}></PostList>
            <PostAddForm></PostAddForm>
        </div>
    )
}

export default App;