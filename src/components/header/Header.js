import React from 'react';
import Search from '../search/Search';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
        <Jumbotron fluid>
            <Container className="text-center ">
                <h1 className="header-text-color">Gallery React App</h1>
                <p className="header-text-color">
                    Gallery app integrated with unsplash api unsing React
                </p>
                <p className="header-text-color">
                    You Can Search & Download images Easily
                </p>
                <Search />
            </Container>
        </Jumbotron>
    )
}

export default Header;

