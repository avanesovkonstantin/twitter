import React from "react";
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { label: 'Going to learn React', important: true, id: 1 },
                { label: 'That is good', important: false, id: 2 },
                { label: 'I need to break....', important: false, id: 3 }
            ],
            maxid: 4
        }
    }

    deleteItem = (id) => {

        this.setState(function ({ data }) {
            const newData = [];
            data.forEach(element => {
                if (element.id !== id) {
                    newData.push(element)
                }
            });

            return {
                data: newData
            }
        })
    }

    render() {
        return (

            <div className="app">
                console.log(deleteItem);
                <AppHeader></AppHeader>
                <div className="search-panel d-flex">
                    <SearchPanel></SearchPanel>
                    <PostStatusFilter></PostStatusFilter>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={(id)=> this.deleteItem(id)}></PostList>
                <PostAddForm></PostAddForm>
            </div >
        )
    }


}

export default App;