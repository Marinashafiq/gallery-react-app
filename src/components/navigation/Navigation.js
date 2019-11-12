import React from 'react';
import Button from 'react-bootstrap/Button';
import './Navigation.scss';
import { connect } from 'react-redux';
import { requestCollection , requestPhotos , requestPagination } from '../../store/actions';

class Navigation extends React.Component {

    getCollections = () => {
        console.log("collections")
        this.props.requestCollection(1);
        this.props.requestPagination(1);
    }

    getPhotos = () => {
        console.log("photos");
        this.props.requestPhotos(1);
        this.props.requestPagination(1);
    }

    render(){
        return(
            <div className="mt-5 w-25 mx-auto container text-white text-center d-flex justify-content-between">
                <Button onClick={this.getPhotos} variant="outline-warning" className="text-white px-5 border-bottom-1">Photos</Button>
                <Button onClick={this.getCollections} variant="outline-warning" className="text-white px-5 border-bottom-1">Collections</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        photos: Object.values(state.photos) ,
        currentPage : state.currentPage
    }
}

export default connect(mapStateToProps , {requestPhotos , requestCollection , requestPagination})(Navigation);