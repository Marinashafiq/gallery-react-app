import React from 'react' ;
import Card from 'react-bootstrap/Card';

const GalleryCard = (props) =>{
    return(
       <div>
            <Card className="border-0 shadow mb-3">
                <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.created_at}</small>
                </Card.Footer>
            </Card>
       </div>
    )
}

export default GalleryCard;
