import React from 'react';
import { connect } from 'react-redux';
import { requestPhotos  } from '../../store/actions/index';
import GalleryCard from '../../components/card/GalleryCard';
import '../../components/search/Search.scss';


class PhotosList extends React.Component {
    

    componentDidMount() {
        console.log("props" , this.props.photos);
        this.props.requestPhotos(1);
    }

    renderPhotosList = () => {
        console.log(this.props.photos);
        return this.props.photos.map(photo => {
            photo.created_at = this.convertTime(photo.created_at);
            return (
                    <GalleryCard  
                    key={photo.id} 
                    url={photo.urls.full} 
                    name={photo.id} 
                    created_at={photo.created_at} 
                    description = {photo.description}
                    likes = {photo.likes}
                    user = {photo.user}
                /> 
            )
        })
    }

    convertTime(createdAt){
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let created_at_date = new Date(createdAt).toLocaleDateString('en-US', options);  
       return created_at_date;       
    }



    render() {
        console.log(this.props.photos);
        return (
            <div>
                {this.renderPhotosList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        photos: Object.values(state.photos),
        currentPage : state.currentPage ,
        pagingType : state.pagingType
    }
}


export default connect(mapStateToProps, { requestPhotos })(PhotosList);