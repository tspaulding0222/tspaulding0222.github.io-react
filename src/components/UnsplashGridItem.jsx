import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class UnsplashGridItem extends React.Component {
    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.itemRef = React.createRef();
    }

    componentDidMount() {
        this.onImgLoaded();
    }

    onImgLoaded() {
        var that = this;    
        var img = this.imgRef.current;
        img.onload = function() {
            if(this.height&& this.width) {
                that.itemRef.current.classList.add("unsplash-grid-item--fadeIn");
            }
            else {
                console.warn("Unsplash Grid Item Image Load Error");
            }
        }
    }

    render() {
        return (
            <div ref={this.itemRef} className="unsplash-grid-item" onClick={() => {this.props.history.push("/image")}}>
                <div className="unsplash-grid-item-img-container">
                    <img ref={this.imgRef} src={this.props.data.urls.regular} />
                </div>
                <h5 className="unsplash-grid-item-title">
                    {this.props.data.user.first_name} {this.props.data.user.last_name}
                </h5>
            </div>
        );
    }
}

UnsplashGridItem.propTypes = {
    data: PropTypes.object
}

export default withRouter(UnsplashGridItem);