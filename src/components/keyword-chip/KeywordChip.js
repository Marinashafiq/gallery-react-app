import React from 'react';
import './KeywordChip.scss';
import Badge from 'react-bootstrap/Badge';

const KeywordChip = (props) => {
    return(
        <Badge pill variant="warning">
            {props.name} +
        </Badge>
    )
}

export default KeywordChip ;