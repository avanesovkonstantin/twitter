import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './post-status-filter.css';
import { Button, ButtonGroup } from 'reactstrap';

class PostStatusFilter extends React.Component {

    constructor(props) {
        super(props)
        this.buttons = [
            { name: 'all', label: 'Все' },
            { name: 'like', label: 'Понравилось' }
        ]
    }
    render() {
        const buttons = this.buttons.map(({ name, label }) => {

            // const active = this.props.filter === name;

            return (
                <Button
                    onClick={() => this.props.onFilter({ name })}
                    key={name}
                    outline
                    color="info"
                >{label}
                </Button>
            )
        })
        return (
            <ButtonGroup>
                {buttons}
            </ButtonGroup>
        )
    }

}

export default PostStatusFilter;