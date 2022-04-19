import React from "react";
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css'

function newDataInvertOption(data, id, optionName) {

    const newData = [];

    data.forEach(element => {
        const newElement = { ...element };
        if (element.id === id) {
            newElement[optionName] = !element[optionName];
        }
        newData.push(newElement);
    });

    console.log(newData);
    return newData
}
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { label: 'Going to learn React', important: false, like: false, id: 1 },
                { label: 'That is good', important: false, like: true, id: 2 },
                { label: 'I need to break....', important: false, like: false, id: 3 }
            ],
            maxid: 4,
            term: '',
            filter: 'all'
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

    addItem = (body) => {

        this.setState(function ({ data, maxid }) {

            const newMaxid = maxid + 1;

            let newData = data.slice();
            newData.push({ label: body, important: false, like: false, id: newMaxid })

            return {
                data: newData,
                maxid: newMaxid
            }
        })

    }

    setImportant = (id) => {
        this.setState(function ({ data }) {
            return {
                data: newDataInvertOption(data, id, 'important')
            }
        })
    }


    setLike = (id) => {
        this.setState(function ({ data }) {
            return {
                data: newDataInvertOption(data, id, 'like')
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch = (newTerm) => {
        this.setState(function ({ term }) {
            return {
                term: newTerm
            }
        });
    }

    onFilter = (name) => {
        this.setState(function ({ filter }) {
            return {
                filter: name
            }
        });
    }

    render() {

        const { data, term, filter } = this.state;

        const liked = data.filter(function (item) {
            return item.like;
        })

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (

            <div className="app">
                <AppHeader
                    count={this.state.data.length}
                    liked={liked.length}
                ></AppHeader>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    >
                    </SearchPanel>
                    <PostStatusFilter
                        filter={filter}
                        onFilter={this.onFilter}
                    >

                    </PostStatusFilter>
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={(id) => this.deleteItem(id)}
                    onImportant={(id) => this.setImportant(id)}
                    onLike={(id) => this.setLike(id)}>
                </PostList>
                <PostAddForm
                    onAdd={this.addItem}>
                </PostAddForm>
            </div >
        )
    }


}

export default App;