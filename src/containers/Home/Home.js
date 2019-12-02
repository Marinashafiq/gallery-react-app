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
    return {
        pagingType: state.pagingType
    }
}

export default connect(mapStateToProps)(Home);