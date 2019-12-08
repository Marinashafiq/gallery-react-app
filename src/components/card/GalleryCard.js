import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown ,faHeart } from '@fortawesome/free-solid-svg-icons'
import { useAlert } from 'react-alert'
import LazyImage from "react-lazy-progressive-image";
import Loader from '../loader/Loader';
import './GalleryCard.scss';

const GalleryCard = (props) => {
    const alert = useAlert();
    function download() {
        props.downloadImageId(props.id)
        alert.show('Thanks , Wait Downloading');
    }

    return (
        <div>
            <Card className="border-0 shadow mb-3">
                <div className="zoom-in-image">
                <LazyImage
                
                    placeholder={"http://via.placeholder.com/300"}
                    src={props.url}
                >
                    {(src, loading, isVisible) =><Card.Img variant="top"  src={src} />
}
                </LazyImage>
                </div>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <div className="userData">
                            <Image src={props.user.profile_image.small} roundedCircle />
                            <small className="mx-2">{props.user.name}</small>
                        </div>
                    <FontAwesomeIcon onClick={download} icon={faLongArrowAltDown} className="text-warning downloadIcon"/>
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">{props.created_at}</small>
                    <small className="text-muted">
                        <FontAwesomeIcon icon={faHeart} className="mr-1"/>
                        {props.likes}
                    </small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default GalleryCard;
