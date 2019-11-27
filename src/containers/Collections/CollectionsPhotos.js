import React from 'react';
import { connect } from 'react-redux';
import { requestCollectionPhotos, requestCollectionId, requestDownloadPhoto } from '../../store/actions/index';
import GalleryCard from '../../components/card/GalleryCard';
import { Container } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import Pagination from '../pagination/Pagination';

class CollectionsPhotos extends React.Component {

    componentDidMount() {
        this.props.requestCollectionPhotos(1, this.props.computedMatch.params.id);
        this.props.requestCollectionId(this.props.computedMatch.params.id);
    }

    downloadImage = (imageId) => {
        this.props.requestDownloadPhoto(imageId);
    }

    renderPhotosList = () => {
        if (!this.props.collectionPhotos) {
            return (
                <div>Loading ...</div>
            )
        }
        return this.props.collectionPhotos.map(photo => {
            photo.created_at = this.convertTime(photo.created_at)
            return (
                <GalleryCard
                    id={photo.id}
                    key={photo.id}
                    url={photo.urls.full}
                    name={photo.id}
                    created_at={photo.created_at}
                    description={photo.description}
                    likes={photo.likes}
                    user={photo.user}
                    downloadImageId={this.downloadImage}

                />
            )
        });
    }

    convertTime(createdAt) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let created_at_date = new Date(createdAt).toLocaleDateString('en-US', options);
        return created_at_date;
    }

    render() {
        return (
            <div>
                <Container className="my-5">
                    <h2 className="text-white">Collection's Photos</h2>
                    <blockquote className="blockquote mb-0 text-white">
                        <small>
                            {' '}
                            The picture that you took with your camera is the imagination you want to create with reality.{' '}
                        </small>
                        <footer className="blockquote-footer text-left">
                            Scott Lorenzo
                    </footer>
                    </blockquote>
                    <CardColumns className="my-5">
                        {this.renderPhotosList()}
                    </CardColumns>
                    <Pagination />
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collectionPhotos: Object.values(state.collectionPhotos)
    };
}

export default connect(mapStateToProps, { requestCollectionPhotos, requestCollectionId, requestDownloadPhoto })(CollectionsPhotos);