import React from 'react';
import { connect } from 'react-redux';
import { requestCollection } from '../../store/actions';
import CollectionCard from '../../components/collection-card/CollectionCard';
import '../search/Search.scss';


class PhotosList extends React.Component {


    componentDidMount() {
        this.props.requestCollection(1);
    }

    renderCollectionList = () => {
        if(this.props.collections) {
            return this.props.collections.map(photo => {
                return (
                    <CollectionCard
                        id={photo.id}
                        key={photo.id}
                        previewPhotos={photo.preview_photos}
                        tags={photo.tags}
                        title={photo.title}
                        totalPhotos={photo.total_photos}
                        description={photo.description}
                    />
                )
    
            })
        }
        else {
            return (
                <div> Still Loading ... </div>
            )
        }

    }


    render() {
        return (
            <div>
                {this.renderCollectionList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collections : Object.values(state.collections),
        currentPage: state.currentPage,
        pagingType: state.pagingType
    }
}


export default connect(mapStateToProps, { requestCollection })(PhotosList);