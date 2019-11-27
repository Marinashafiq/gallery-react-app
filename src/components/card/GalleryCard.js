import React from 'react' ;
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const GalleryCard = (props) =>{

    function download () {
        console.log(props.id);
        props.downloadImageId(props.id)       
    }

    return(
       <div>
            <Card className="border-0 shadow mb-3">
                <Card.Img variant="top" src={props.url} />
                <Card.Body>                                       
                    <Card.Title>
                    <Image src={props.user.profile_image.small} roundedCircle />
                    <small className="mx-2">{props.user.name}</small>
                    </Card.Title>                   
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">{props.created_at}</small>
                    <small className="text-muted">{props.likes}</small>
                    <Button onClick={download}>Download Image</Button>
                </Card.Footer>
            </Card>
       </div>
    )
}

export default GalleryCard;
