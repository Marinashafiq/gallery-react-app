import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { requestPhotos } from '../../store/actions/index';

class PhotosList extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.requestPhotos();
    }

    renderPhotosList() {
        return this.props.photos.map(photo => {
            console.log(photo.id);
            return (
                <div  key={photo.id}>
                    <div>
                        <img src={photo.urls.full} height='100' width='100' />
                        {photo.id}
                    </div>
                </div>
            )
        })
    }



    render() {
        console.log(this.props.photos);
        return (
            <div>
              <h1>Photos List</h1>
              {this.renderPhotosList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: Object.values(state.photos)
    }
}


export default connect(mapStateToProps, { requestPhotos })(PhotosList);