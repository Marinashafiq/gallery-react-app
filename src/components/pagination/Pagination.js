import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { requestPagination } from '../../store/actions/index';
class Pagination extends React.Component {


    getNext = () => {    
        console.log(this.props.current_page);
        let nextPage = this.props.current_page + 1 ;
        console.log(nextPage);
        this.props.requestPagination(nextPage);
    }

    getPrev = () =>{        
        console.log(this.props.current_page);
        let prevPage = this.props.current_page - 1 ;
        console.log(prevPage);
        this.props.requestPagination(prevPage);
    }



    render(){
        return(
            <div className="d-flex justify-content-between">
                <Button variant="outline-warning"  onClick={this.getPrev} className="border-raduis-3 text-white px-5">Prev</Button>
                <Button variant="outline-warning" onClick={this.getNext} className="border-raduis-3 text-white px-5">Next</Button>
            </div>
        )
    }
}

mapStateToProps = (state) => {
    console.log(state);
    return {
        currentPage : state.currentPage
    }
}

export default connect(mapStateToProps , {receiveNextPagePhotos})(Pagination) ;