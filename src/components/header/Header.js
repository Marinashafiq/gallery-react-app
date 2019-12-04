import React from 'react';
import Search from '../../containers/search/Search';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import './Header.scss';
import Navigation from '../../containers/navigation/Navigation';
import KeywordChip from '../../components/keyword-chip/KeywordChip';

const Header = () => {

    const keywords = ['love' , 'wallpaper' , 'Nature' , 'Current Events' , 'Film' , 'Dark' , 'Black & White' , 'Travel' , 'fashion' , 'Kids']

    function renderChips () {
        keywords.map(keyword => {
            return(
                <KeywordChip name={keyword} />
            )
        })
    }

    return (
        <div className="d-flex h-100 align-items-center">
            {/* <Jumbotron fluid> */}
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

            {/* </Jumbotron> */}
            {/* <Navigation /> */}
        </div>
    )
}

export default Header;

