import React from 'react';
import Button from 'react-bootstrap/Button';
import './Navigation.scss';
import { connect } from 'react-redux';
import { requestCollection, requestPhotos, requestPagination, requestSearchCollections, requestSearchPhotos } from '../../store/actions';
import { Link } from "react-router-dom";

class Navigation extends React.Component {

    getCollections = () => {
        this.props.requestCollection(1);
        this.props.requestPagination(1);
        this.props.requestSearchCollections(1, "");

    }

    getPhotos = () => {
        this.props.requestPhotos(1);
        this.props.requestPagination(1);
        this.props.requestSearchPhotos(1, "");
    }

    render() {
        return (
            <div className="mt-5 text-white text-center d-flex justify-content-center">
                <Button  onClick={this.getPhotos} variant={this.props.pagingType === "photos" || this.props.pagingType === "search_photos" ? "outline-warning" : "link"} >
                    <Link to={"/"} className={"text-white px-5 mx-2"}>Photos</Link>
                </Button>
                <Button onClick={this.getCollections} variant={this.props.pagingType === "collections" || this.props.pagingType === "search_collections" ? "outline-warning" : "link"}>
                    <Link to={"/collections"} className={"text-white px-5 mx-2"}>Collections</Link>
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: Object.values(state.photos),
        currentPage: state.currentPage,
        pagingType: state.pagingType
    }
}

export default connect(mapStateToProps, { requestPhotos, requestCollection, requestPagination, requestSearchCollections, requestSearchPhotos })(Navigation);