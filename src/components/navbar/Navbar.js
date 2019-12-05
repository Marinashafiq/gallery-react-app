import React from 'react' ;
import {Navbar , Nav , Form , FormControl , Button} from 'react-bootstrap';

const NavElement = () => {

    return(
        <Navbar sticky="top"  bg="dark" variant="dark">
            <Navbar.Brand href="/">Gallery</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/photos">Photos</Nav.Link>
                <Nav.Link href="/collections">Collections</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-warning"><i className="fa fa-search"></i></Button>
            </Form>
        </Navbar>
    )
}

export default NavElement ;