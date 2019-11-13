import React from 'react';
import { connect } from 'react-redux';
import { requestCollection } from '../../store/actions/index';
import CollectionCard from '../../components/collection-card/CollectionCard';
import '../../components/search/Search.scss';


class PhotosList extends React.Component {


    componentDidMount() {
        console.log("props", this.props.collections);
        this.props.requestCollection(1);
    }

    renderCollectionList = () => {
        console.log(this.props.collections);
        if(this.props.collections) {
            return this.props.collections.map(photo => {
                console.log("Collections")
                console.log(photo.id)
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
        console.log(this.props.collections);
        return (
            <div>
                {this.renderCollectionList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        collections : Object.values(state.collections),
        currentPage: state.currentPage,
        pagingType: state.pagingType
    }
}


export default connect(mapStateToProps, { requestCollection })(PhotosList);