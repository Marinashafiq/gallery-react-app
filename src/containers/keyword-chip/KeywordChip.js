import React from 'react';
import './KeywordChip.scss';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { requestCollection, requestSearchPhotos } from '../../store/actions';

class KeywordChip extends React.Component {

    componentDidMount(){
        console.log("COmponent")
    }

    handleClick = () => {
        console.log("love");
    }

    renderChips = () => {
        const keywords = ['love' , 'wallpaper' , 'Nature' , 'Current Events' , 'Film' , 'Dark' , 'Black & White' , 'Travel' , 'fashion' , 'Kids']
        return keywords.map(keyword => {
            return(
                <Badge 
                    onClick={this.handleClick}
                    pill variant="warning" 
                    className="keywordsChip mt-5 mx-4 px-4 py-3">
                    {keyword} +
                </Badge>
            )
        })
    }

    render() {
        return(
        <div>{this.renderChips}</div>
        )
    }
}


export default connect(null , {requestSearchPhotos})(KeywordChip) ;