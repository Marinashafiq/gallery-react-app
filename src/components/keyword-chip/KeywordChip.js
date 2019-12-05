import React from 'react';
import './KeywordChip.scss';
import Badge from 'react-bootstrap/Badge';

const KeywordChip = (props) => {

    console.log(props)
    return(
        <Badge pill variant="warning" className="keywordsChip mt-5 mx-4 px-4 py-3">
            {props.name} +
        </Badge>
    )
}

export default KeywordChip ;