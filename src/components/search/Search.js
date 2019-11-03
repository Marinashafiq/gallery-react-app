import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Search.scss';

class Search extends React.Component {
    render(){
        return(
            <div>
                 <div className="d-flex search-input">
                    <InputGroup size="lg" className="mr-3">
                        <FormControl aria-label="Large" placeholder="Search for images with keywords" className="border-0 shadow border-raduis-3" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <Button variant="warning" className="border-raduis-3 text-white px-5">Search</Button>
                 </div>
            </div>
        )
    }
}

export default Search;