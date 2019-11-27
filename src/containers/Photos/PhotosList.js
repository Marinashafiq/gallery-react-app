import React from 'react';
import { connect } from 'react-redux';
import { requestPhotos, requestDownloadPhoto } from '../../store/actions/index';
import GalleryCard from '../../components/card/GalleryCard';

class PhotosList extends React.Component {
    componentDidMount() {
        this.props.requestPhotos(1);
    }

    downloadImage = (imageId) => {
        this.props.requestDownloadPhoto(imageId);
    }

    renderPhotosList = () => {
        return this.props.photos.map(photo => {
            photo.created_at = this.convertTime(photo.created_at);
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
        })
    }

    convertTime(createdAt) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let created_at_date = new Date(createdAt).toLocaleDateString('en-US', options);
        return created_at_date;
    }



    render() {
        return (
            <div>
                {this.renderPhotosList()}
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


export default connect(mapStateToProps, { requestPhotos, requestDownloadPhoto })(PhotosList);