import React from 'react';
import { connect } from 'react-redux';
import PhotosList from '../Photos/PhotosList';
import CollectionList from '../Collections/CollectionList';
import { Container } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import Header from '../../components/header/Header';
import '../search/Search.scss';
import Pagination from '../pagination/Pagination';

class Home extends React.Component {
    render(){
        let renderedComponent ;
        if(this.props.pagingType === 'photos' || this.props.pagingType === 'search_photos') {
            renderedComponent = <PhotosList />
        }
        else if(this.props.pagingType === 'collections' || this.props.pagingType === 'search_collections'){
            renderedComponent = <CollectionList />
        }
        return(
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
        pagingType : state.pagingType
    }
}

export default connect(mapStateToProps)(Home) ;