import React from "react";

import './search-panel.css';

class SearchPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const newTerm = e.target.value;
        this.setState(function({term}){
            return {
                term: newTerm
            }
        });
        this.props.onUpdateSearch(newTerm);
    }
    render() {
        return (<input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={this.onUpdateSearch}
        >
        </input>)
    }

}

export default SearchPanel;