import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { 
    requestPagination , 
    requestPhotos , 
    requestSearchPhotos , 
    requestCollection , 
    requestSearchCollections , 
    requestCollectionPhotos} from '../../store/actions/index';
class Pagination extends React.Component {


    getNext = () => {    
        let nextPage = this.props.currentPage + 1 ;
        this.props.requestPagination(nextPage);
        if(this.props.pagingType === 'photos'){
            this.props.requestPhotos(nextPage);
        }
        else if(this.props.pagingType === 'search_photos'){
            this.props.requestSearchPhotos(nextPage , this.props.searchKeyword.keyword);
        }
        else if(this.props.pagingType === 'collections'){
            this.props.requestCollection(nextPage);
        }
        else if(this.props.pagingType === 'search_collections'){
            this.props.requestSearchCollections(nextPage , this.props.searchKeyword.keyword);
        }
        else if(this.props.pagingType === 'collection-photos'){
            this.props.requestCollectionPhotos(nextPage , this.props.collectionsId);
        }
    }

    getPrev = () =>{        
      if(this.props.currentPage > 1 ) {
        let prevPage = this.props.currentPage - 1 ;
        this.props.requestPagination(prevPage);
        if(this.props.pagingType === 'photos'){
            this.props.requestPhotos(prevPage);
        }
        else if(this.props.pagingType === 'search_photos'){
            this.props.requestSearchPhotos(prevPage , this.props.searchKeyword.keyword);
        }
        else if(this.props.pagingType === 'collections'){
            this.props.requestCollection(prevPage);
        }
        else if(this.props.pagingType === 'search_collections'){
            this.props.requestSearchCollections(prevPage , this.props.searchKeyword.keyword);
        }
         else if(this.props.pagingType === 'collection-photos'){
            this.props.requestCollectionPhotos(prevPage , this.props.collectionsId);
        }
      }
    }



    render(){
        return(
            <div className="d-flex justify-content-between align-items-center">
                <Button variant="outline-warning"  onClick={this.getPrev} className="border-raduis-3 text-white px-5" disabled={this.props.currentPage === 1}>Prev</Button>
                <h6 className="text-white mb-0">Page {this.props.currentPage}</h6>
                <Button variant="outline-warning" onClick={this.getNext} className="border-raduis-3 text-white px-5" rel="last">Next</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage : state.currentPage,
        pagingType : state.pagingType,
        searchKeyword : state.searchKeyword,
        collectionsId : state.collectionsId
    }
}

export default connect(mapStateToProps , {requestPagination , requestPhotos , requestSearchPhotos , requestCollection , requestSearchCollections , requestCollectionPhotos})(Pagination) ;