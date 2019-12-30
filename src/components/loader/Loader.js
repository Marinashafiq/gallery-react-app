import React from 'react' ;
import './Loader.scss';
import Spinner from 'react-bootstrap/Spinner'
const Loader = () => {
    return (
        <div className="loader">
            <Spinner animation="border" variant="warning" />  
        </div>
    )
}

export default Loader ;