import React from 'react';
import { connect } from 'react-redux';
import PhotosList from '../Photos/PhotosList';
import CollectionList from '../Collections/CollectionList';
import CardColumns from 'react-bootstrap/CardColumns';
import { Container } from 'react-bootstrap';
import { requestSearchPhotos, requestSearchCollections, requestPagingType } from '../../store/actions';
import history from '../../routes/history';
import Pagination from '../pagination/Pagination';
import NavElement from '../../components/navbar/Navbar';
import {Tabs , Tab} from 'react-bootstrap'
import './SearchResults.scss';

class SearchResults extends React.Component {

    componentDidMount() {
        console.log(history);
        this.props.requestSearchPhotos(this.props.currentPage, this.props.computedMatch.params.keyword);
        // this.props.requestSearchCollections(this.props.currentPage , this.props.computedMatch.params.keyword);
        this.props.requestPagingType('search-photos');
        // if (history.location.pathname === '/search/photos') {
        //     }
    }

    renderSearchHeader = () => {
        return (
            <div>
                <h2 className="text-white mb-0">Search Results</h2>
                <p className="text-warning mb-0">{this.props.searchKeyword.keyword}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <NavElement />
                <Container className="my-5">
                    {this.renderSearchHeader()}
                    <Tabs className="mt-4" defaultActiveKey="photos" id="uncontrolled-tab-example">
                        <Tab eventKey="photos" title="Photos">
                            <CardColumns className="my-5">
                                <PhotosList />
                            </CardColumns>
                        </Tab>
                        <Tab eventKey="collections" title="Collections">
                            <CardColumns className="my-5">
                                <PhotosList />
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

export default connect(mapStateToProps, { requestSearchCollections, requestSearchPhotos, requestPagingType })(SearchResults); 