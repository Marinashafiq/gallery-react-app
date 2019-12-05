import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Search.scss';
import { connect } from 'react-redux';
import { 
    requestSearchPhotos, 
    requestPhotos, 
    requestSearchCollections, 
    requestCollection,
    requestPagination } from '../../store/actions';
import history from '../../routes/history';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.pagingType !== this.props.pagingType){
            console.log("CLEAR");
            this.setState({
                keyword : ""
            })
        }
    }

    handleChange = (e) => {
        console.log(e);
        // const { pagingType , requestPhotos , requestCollection } = this.props ;
        this.setState({
            keyword: e.target.value
        })
        if (e.target.value === "") {
            this.setState({
                keyword: ""
            })
            // if (pagingType === 'photos' || pagingType === 'search_photos') {
            //     requestPhotos(1);
            //     e.target.value = '';
            // }
            // else if (pagingType === 'collections' || pagingType === 'search_collections') {
            //     requestCollection(1);
            //     e.target.value = '';
            // }
        }
    }

    onSubmit = (e) => {
        const { pagingType , currentPage , requestSearchPhotos , requestSearchCollections , requestPagination} = this.props ;
        // requestPagination(1);
        // requestSearchPhotos(currentPage, this.state.keyword);
        // requestSearchCollections(currentPage, this.state.keyword);
        history.push(`/photos/${this.state.keyword}`);       
    }


    render() {
        return (
            <div>
                <div className="d-flex search-input mt-4">
                    <InputGroup size="lg" className="mr-3">
                        <FormControl
                            value = {this.state.keyword}
                            aria-label="Large"
                            onChange={e => this.handleChange(e)}
                            placeholder="Search for images with keywords ( Sky , love .. etc )"
                            className="border-0 shadow border-raduis-3"
                            aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <Button variant="warning" onClick={(e) => this.onSubmit(e)} className="border-raduis-3 text-white font-weight-bold px-5">Search</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        pagingType: state.pagingType , 
        searchKeyword: state.searchKeyword
    }
}

export default connect(mapStateToProps, { requestSearchPhotos, requestCollection, requestPhotos, requestSearchCollections , requestPagination })(Search);