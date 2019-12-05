import React from 'react';
import { connect } from 'react-redux';
import PhotosList from '../Photos/PhotosList';
import CollectionList from '../Collections/CollectionList';
import CardColumns from 'react-bootstrap/CardColumns';
import { Container } from 'react-bootstrap';
import { requestSearchPhotos, requestSearchCollections, requestPagingType , requestPagination } from '../../store/actions';
import history from '../../routes/history';
import Pagination from '../pagination/Pagination';
import NavElement from '../../components/navbar/Navbar';
import {Tabs , Tab} from 'react-bootstrap'
import './SearchResults.scss';

class SearchResults extends React.Component {

    componentDidMount() {
        this.props.requestSearchPhotos(this.props.currentPage, this.props.computedMatch.params.keyword);
        this.props.requestPagingType('search-photos');
    }

    renderSearchHeader = () => {
        return (
            <div>
                <h2 className="text-white mb-0">Search Results</h2>
                <p className="text-warning mb-0">{this.props.searchKeyword.keyword}</p>
            </div>
        )
    }

    handleSelect = (key) => {
        this.props.requestPagination(1);
        if(key === 'photos') {
            this.props.requestSearchPhotos(this.props.currentPage , this.props.computedMatch.params.keyword);
            this.props.requestPagingType('search-photos');    
        }
        else {
            this.props.requestSearchCollections(this.props.currentPage , this.props.computedMatch.params.keyword);
            this.props.requestPagingType('search-collections');
            
        }
    }
    
    render() {
        return (
            <div>
                <NavElement />
                <Container className="my-5">
                    {this.renderSearchHeader()}
                    <Tabs className="mt-4" defaultActiveKey="photos" onSelect={this.handleSelect} id="uncontrolled-tab-example">
                        <Tab eventKey="photos" title="Photos">
                            <CardColumns className="my-5">
                                <PhotosList />
                            </CardColumns>
                        </Tab>
                        <Tab eventKey="collections" title="Collections">
                            <CardColumns className="my-5">
                                <CollectionList />
                            </CardColumns>
                        </Tab>
                    </Tabs>

                    <Pagination />
                </Container>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        searchKeyword: state.searchKeyword
    }
}

export default connect(mapStateToProps, { requestSearchCollections, requestSearchPhotos, requestPagingType , requestPagination})(SearchResults); 