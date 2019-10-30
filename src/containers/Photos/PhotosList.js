import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { requestPhotos } from '../../store/actions/index';

class PhotosList extends React.Component {

    componentDidMount() {
        this.props.requestStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            console.log("trueee")
            return (
                // <div className="extra content">
                //     <div className="ui two buttons">
                //         <Link to={`/streams/edit/${stream.id}`} className="ui green basic button">
                //             Edit
                //     </Link>
                //         <Link to={`/streams/delete/${stream.id}`} className="ui red basic button">
                //             Delete
                //     </Link>

                //     </div>
                // </div>
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }

    }

    renderStreamList() {
        return this.props.streams.map(stream => {
            console.log(stream.id);
            return (
                // <div className="column" key={stream.id}>
                //     <div className="ui link card">
                //         <div className="content">
                //             <div className="header">
                //                 <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                //             </div>
                //             {/* <div className="meta">Scientist</div> */}
                //             <div className="description">
                //                 {stream.description}
                //             </div>
                //             {this.renderAdmin(stream)}
                //         </div>
                //     </div>
                // </div>
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large divided middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }



    render() {
        console.log(this.props.photos);
        return (
            <div>
              <h1>Photos List</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: Object.values(state.photos)
    }
}


export default connect(mapStateToProps, { requestPhotos })(PhotosList);