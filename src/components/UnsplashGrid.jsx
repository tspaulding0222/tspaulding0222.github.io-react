import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toJson } from "unsplash-js";

import UnsplashGridItem from "../components/UnsplashGridItem";

class UnsplashGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }

	componentWillMount() {
		this.getUnsplashImages();
	}

	getUnsplashImages() {
		this.props.unsplash.photos
			.listCuratedPhotos(2, 15, "latest")
			.then(toJson)
			.then(json => {
				this.setState({images: json});
			});
	}

	render() {
		const gridItems = this.state.images.map((item, index) => {
			return <UnsplashGridItem key={"unsplash-grid-item" + index} data={item} />;
		});

		return <div className="unsplash-grid">{gridItems}</div>;
	}
}

UnsplashGrid.propTypes = {
	unsplash: PropTypes.object
};

const mapStateToProps = state => {
	return {
		unsplash: state.unsplash,
		images: []
	};
};

export default connect(mapStateToProps)(UnsplashGrid);
