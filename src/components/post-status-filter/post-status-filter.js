import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './post-status-filter.css';
import { Button, ButtonGroup } from 'reactstrap';

const PostStatusFilter = () => {

    return (
       <ButtonGroup>
            <Button outline color="info">Все</Button>
            <Button outline color="info">Понравились</Button>
       </ButtonGroup> 
    )
}

export default PostStatusFilter;