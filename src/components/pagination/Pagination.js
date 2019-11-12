import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { requestPagination , requestPhotos , requestSearchPhotos , requestCollection , requestSearchCollections} from '../../store/actions/index';
class Pagination extends React.Component {


    getNext = () => {    
        console.log(this.props);
        console.log(this.props.currentPage);
        let nextPage = this.props.currentPage + 1 ;
        console.log(nextPage);
        this.props.requestPagination(nextPage);
        if(this.props.pagingType === 'photos'){
            console.log("next photos")

            this.props.requestPhotos(nextPage);
        }
        else if(this.props.pagingType === 'search_photos'){
            console.log("search photos next")
            this.props.requestSearchPhotos(nextPage , this.props.searchKeyword.keyword);
        }
        else if(this.props.pagingType === 'collections'){
            console.log("collection paging");
            this.props.requestCollection(nextPage);
        }
        else if(this.props.pagingType === 'search_collections'){
            console.log("search collections next")
            this.props.requestSearchCollections(nextPage , this.props.searchKeyword.keyword);
        }
    }

    getPrev = () =>{        
      if(this.props.currentPage > 1 ) {
        let prevPage = this.props.currentPage - 1 ;
        this.props.requestPagination(prevPage);
        if(this.props.pagingType === 'photos'){
            console.log("prev photos")
            this.props.requestPhotos(prevPage);
        }
        else if(this.props.pagingType === 'search_photos'){
            console.log("search photos prev")

            this.props.requestSearchPhotos(prevPage , this.props.searchKeyword.keyword);
        }
        else if(this.props.pagingType === 'collections'){
            console.log("collection paging");
            this.props.requestCollection(prevPage);
        }
        else if(this.props.pagingType === 'search_collections'){
            console.log("search collections prev")
            this.props.requestSearchCollections(prevPage , this.props.searchKeyword.keyword);
        }
      }
    }



    render(){
        return(
            <div className="d-flex justify-content-between align-items-center">
                <Button variant="outline-warning"  onClick={this.getPrev} className="border-raduis-3 text-white px-5" disabled={this.props.currentPage == 1}>Prev</Button>
                <h6 className="text-white mb-0">Page {this.props.currentPage}</h6>
                <Button variant="outline-warning" onClick={this.getNext} className="border-raduis-3 text-white px-5" rel="last">Next</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        photos: Object.values(state.photos) ,
        currentPage : state.currentPage,
        pagingType : state.pagingType,
        searchKeyword : state.searchKeyword
    }
}

export default connect(mapStateToProps , {requestPagination , requestPhotos , requestSearchPhotos , requestCollection , requestSearchCollections})(Pagination) ;