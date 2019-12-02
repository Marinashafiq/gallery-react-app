import React from 'react';
import Button from 'react-bootstrap/Button';
import './Navigation.scss';
import { connect } from 'react-redux';
import { requestCollection, requestPhotos, requestPagination, requestSearchCollections, requestSearchPhotos } from '../../store/actions';
import { Link } from "react-router-dom";

class Navigation extends React.Component {

    getCollections = () => {
        const { requestCollection , requestPagination , requestSearchCollections } = this.props ;
        requestCollection(1);
        requestPagination(1);
        requestSearchCollections(1, "");

    }

    getPhotos = () => {
        const { requestPhotos , requestPagination , requestSearchCollections } = this.props ;
        requestPhotos(1);
        requestPagination(1);
        requestSearchCollections(1, "");
    }

    render() {
        const { pagingType } = this.props;
        return (
            <div className="mt-5 text-white text-center d-flex justify-content-center">
                <Button  onClick={this.getPhotos} variant={pagingType === "photos" || pagingType === "search_photos" ? "outline-warning" : "link"} >
                    <Link to={"/"} className={"text-white px-5 mx-2"}>Photos</Link>
                </Button>
                <Button onClick={this.getCollections} variant={pagingType === "collections" || pagingType === "search_collections" ? "outline-warning" : "link"}>
                    <Link to={"/collections"} className={"text-white px-5 mx-2"}>Collections</Link>
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pagingType: state.pagingType
    }
}

export default connect(mapStateToProps, { requestPhotos, requestCollection, requestPagination, requestSearchCollections, requestSearchPhotos })(Navigation);