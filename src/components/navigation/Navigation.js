import React from 'react';

class Navigation extends React.Component {
    render(){
        return(
            <div className="mt-5 w-25 mx-auto container text-white text-center d-flex justify-content-between">
                <h6>Photos</h6>
                <h6>Collections</h6>
                {/* <h6>Featured Photos</h6> */}
            </div>
        )
    }
}

export default Navigation;