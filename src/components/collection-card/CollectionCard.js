import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CollectionCard.scss';
import Badge from 'react-bootstrap/Badge';

const CollectionCard = (props) => {
    console.log(props);

    if (props.previewPhotos != undefined) {
        var RequestNodes = props.previewPhotos.map((request) => <Col xs={6}> <div className="backgroundImg" style={{ backgroundImage: 'url(' + request.urls.thumb + ')' }}> </div></Col>)
        var tags = props.tags.map((tag) => <Badge pill variant="warning" className="mr-2">{tag.title}</Badge>)
    }

    return (
        <div>
            <Card className="border-0 shadow mb-3">
                <Container>
                    <Row>
                        {RequestNodes}
                    </Row>
                </Container>
                <Card.Body>
                    <Card.Title>
                        {/* <Image src={props.previewPhotos} roundedCircle /> */}
                        <small className="text-secondary">Collection</small>
                        <strong className="d-block">{props.title}</strong>
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    {tags}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">{props.totalPhotos}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default CollectionCard;
