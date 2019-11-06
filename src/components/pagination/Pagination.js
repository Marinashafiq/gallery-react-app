import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { requestPagination , requestPhotos , requestSearchPhotos } from '../../store/actions/index';
class Pagination extends React.Component {


    getNext = () => {    
        console.log(this.props.currentPage);
        let nextPage = this.props.currentPage + 1 ;
        console.log(nextPage);
        this.props.requestPagination(nextPage);
        this.props.requestPhotos(nextPage);
    }

    getPrev = () =>{        
      if(this.props.currentPage > 1 ) {
        let prevPage = this.props.currentPage - 1 ;
        this.props.requestPagination(prevPage);
        this.props.requestPhotos(prevPage);
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
        currentPage : state.currentPage
    }
}

export default connect(mapStateToProps , {requestPagination , requestPhotos , requestSearchPhotos})(Pagination) ;