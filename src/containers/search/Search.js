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
            this.setState({
                keyword : ""
            })
        }
    }

    handleChange = (e) => {
        // const { pagingType , requestPhotos , requestCollection } = this.props ;
        this.setState({
            keyword: e.target.value
        })
        if (e.target.value === "") {
            this.setState({
                keyword: ""
            })
        }
    }

    onSubmit = (e) => {
        const { pagingType , currentPage , requestSearchPhotos , requestSearchCollections , requestPagination} = this.props ;
        // requestPagination(1);
        // requestSearchPhotos(currentPage, this.state.keyword);
        // requestSearchCollections(currentPage, this.state.keyword);
        this.setState({
            keyword: e.target.value
        })
        history.push(`/search/${this.state.keyword}`);       
    }

    renderSearchButton = () => {
        if(history.location.pathname == '/'){
            return(
                <Button variant="warning" onClick={(e) => this.onSubmit(e)} className="border-raduis-3 text-white font-weight-bold px-5">Search</Button>
            )
        }
        else {
            return(
                <Button variant="outline-warning" className="border-raduis-3" onClick={(e) => this.onSubmit(e)}><i className="fa fa-search"></i></Button>
            )
        }
    }


    render() {
        return (
            <div>
                <div className="d-flex search-input">
                <FormControl 
                    value = {this.state.keyword || ""}
                    onChange={e => this.handleChange(e)}
                    placeholder="Search in Gallery" 
                    className="mr-sm-2 border-0 shadow border-raduis-3" />
                    {this.renderSearchButton()}
                    {/* <InputGroup size="lg" className="mr-3 mt-4">
                        <FormControl
                            value = {this.state.keyword}
                            aria-label="Large"
                            onChange={e => this.handleChange(e)}
                            placeholder="Search for images with keywords ( Sky , love .. etc )"
                            className="border-0 shadow border-raduis-3"
                            aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <Button variant="warning" onClick={(e) => this.onSubmit(e)} className="border-raduis-3 text-white font-weight-bold px-5">Search</Button> */}
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