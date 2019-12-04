import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import PhotosList from '../Photos/PhotosList';
import CollectionList from '../Collections/CollectionList';
import CardColumns from 'react-bootstrap/CardColumns';
import Header from '../../components/header/Header';
import Pagination from '../pagination/Pagination';
import '../search/Search.scss';

class Home extends React.Component {

    renderSearchHeader = () =>{
        console.log("SEARCH HEADER")
        if(this.props.pagingType === 'search_photos' || this.props.pagingType === 'search_collections' ){
        console.log("SEARCH HEADER")
            
            console.log(this.props.searchKeyword);
            return(
                <div>
                    <h2 className="text-white mb-0">Search Results</h2>
                    <p className="text-warning mb-0">{this.props.searchKeyword.keyword}</p>
                </div>
            )
        }
    }

    render() {
        let renderedComponent;
        const { pagingType } = this.props ;
        if (pagingType === 'photos' || pagingType === 'search_photos') {
            renderedComponent = <PhotosList />
        }
        else if (pagingType === 'collections' || pagingType === 'search_collections') {
            renderedComponent = <CollectionList />
        }
        return (
            <div>
                <Header />
                <Container className="my-5">
                    {this.renderSearchHeader()}
                    <CardColumns className="my-5">
                        {renderedComponent}
                    </CardColumns>
                    <Pagination />
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        pagingType: state.pagingType,
        searchKeyword : state.searchKeyword
    }
}

export default connect(mapStateToProps)(Home);