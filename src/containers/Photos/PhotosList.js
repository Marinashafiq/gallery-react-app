import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { requestPhotos } from '../../store/actions/index';
import GalleryCard from '../../components/card/GalleryCard';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Header from '../../components/header/Header';
import Button from 'react-bootstrap/Button';
import '../../components/search/Search.scss';


class PhotosList extends React.Component {
    

    componentDidMount() {
        console.log("props" , this.props);
        this.props.requestPhotos(1);
    }

    renderPhotosList() {
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

    renderPaginationControls(){
        return(
            <div className="d-flex justify-content-between">
                <Button variant="outline-warning" onClick={this.getPrev} className="border-raduis-3 text-white px-5">Prev</Button>
                <Button variant="outline-warning" onClick={this.getNext} className="border-raduis-3 text-white px-5">Next</Button>
            </div>
        )
    }

    getNext = () => {    
        console.log(this.props.current_page);
        let nextPage = this.props.current_page + 1 ;
        console.log(nextPage);
        this.props.requestPhotos(nextPage);    
    }

    getPrev = () =>{        
        console.log(this.props.current_page);
        let prevPage = this.props.current_page - 1 ;
        console.log(prevPage);
        this.props.requestPhotos(prevPage)
    }


    render() {
        console.log(this.props.photos);
        return (
            <div>
               <Header />
                <Container className="my-5">
                    <CardColumns className="my-5">
                        {this.renderPhotosList()}
                    </CardColumns>
                    {this.renderPaginationControls()}
                </Container>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        photos: Object.values(state.photos),
        current_page : state.currentPage
    }
}


export default connect(mapStateToProps, { requestPhotos })(PhotosList);