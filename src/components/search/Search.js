import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Search.scss';
import { connect } from 'react-redux';
import { requestSearchPhotos, requestPhotos, requestSearchCollections, requestCollection } from '../../store/actions';


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            keyword: e.target.value
        })
        if (e.target.value == "") {
            console.log("EMPTYYYYY");
            this.setState({
                keyword: ""
            })
            if(this.props.pagingType == 'photos' || this.props.pagingType == 'search_photos'){
                this.props.requestPhotos(1);
                e.target.value  =  '';
            }
            else if(this.props.pagingType == 'collections' || this.props.pagingType == 'search_collections'){
                this.props.requestCollection(1);
                e.target.value  =  '';
            }
        }
        console.log(this.state);
    }

    onSubmit = (e) => {
        console.log(this.props);
        e.preventDefault();
        console.log(this.state.keyword)

        if (this.props.pagingType == 'photos' || this.props.pagingType == 'search_photos') {
            this.props.requestSearchPhotos(this.props.currentPage, this.state.keyword);
        }
        else if (this.props.pagingType == 'collections' || this.props.pagingType == 'search_collections') {
            this.props.requestSearchCollections(this.props.currentPage, this.state.keyword);
        }
    }


    render() {
        return (
            <div>
                <div className="d-flex search-input">
                    <InputGroup size="lg" className="mr-3">
                        <FormControl
                            aria-label="Large"
                            onChange={e => this.handleChange(e)}
                            placeholder="Search for images with keywords"
                            className="border-0 shadow border-raduis-3"
                            aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <Button variant="warning" onClick={(e) => this.onSubmit(e)} className="border-raduis-3 text-white px-5">Search</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        photos: Object.values(state.photos),
        currentPage: state.currentPage,
        pagingType: state.pagingType
    }
}

export default connect(mapStateToProps, { requestSearchPhotos,requestCollection , requestPhotos, requestSearchCollections })(Search);