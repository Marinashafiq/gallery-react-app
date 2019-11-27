import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './GalleryCard.scss';

const GalleryCard = (props) => {

    function download() {
        props.downloadImageId(props.id)
    }

    return (
        <div>
            <Card className="border-0 shadow mb-3">
                <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <div className="userData">
                            <Image src={props.user.profile_image.small} roundedCircle />
                            <small className="mx-2">{props.user.name}</small>
                        </div>
                        <i onClick={download} className="fa fa-arrow-down text-warning downloadIcon"></i>
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">{props.created_at}</small>
                    <small className="text-muted"><i className="fa fa-heart mr-1"></i>{props.likes}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default GalleryCard;
