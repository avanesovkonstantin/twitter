import React from "react";
import './post-add-form.css';

class PostAddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ""
        }
    }

    onChangeInputText = (e) => {
        this.setState(function({inputText}){
            return {
                inputText: e.target.value
            }
        })
    }

    onPushTheButton =(e) => {
        e.preventDefault();
        this.props.onAdd(this.state.inputText);
        this.setState(function({inputText}){
            return {
                inputText: ""
            }
        })
    }

    render() {
        
        return (
            <form 
            className="bottom-panel d-flex"
            onSubmit={this.onPushTheButton}>
                <input
                    value={this.state.inputText}
                    type="text"
                    placeholder="о чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onChangeInputText}
                ></input>

                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >Добавить</button>
            </form>
        )
    }
}

export default PostAddForm;