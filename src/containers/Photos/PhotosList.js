import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { requestPhotos } from '../../store/actions/index';
import GalleryCard from '../../components/card/GalleryCard';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class PhotosList extends React.Component {
    

    componentDidMount() {
        console.log(this.props);
        this.props.requestPhotos();
    }

    renderPhotosList() {
        return this.props.photos.map(photo => {
            console.log(photo.created_at);
            photo.created_at = this.convertTime(photo.created_at);
            console.log(photo.created_at);
            return (

                    <GalleryCard  key={photo.id} url={photo.urls.full} name={photo.id} created_at={photo.created_at} />
              
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
                <h1>Photos List</h1>
                <Container>
                    <CardColumns>
                        {this.renderPhotosList()}
                    </CardColumns>
                </Container>

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