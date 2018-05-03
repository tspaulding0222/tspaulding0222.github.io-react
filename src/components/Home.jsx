import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {toJson} from 'unsplash-js';

import UnsplashGrid from "../components/UnsplashGrid";

class Home extends React.Component {
	getUnsplashImages() {
		this.props.unsplash.photos
			.listCuratedPhotos(2, 15, "latest")
			.then(toJson)
			.then(json => {
				this.images = json;
			});
	}

	render() {
		return (
			<div className="home">
				<div className="home-header">
					<h1>unSplash</h1>
					<div className="home-header-menu">
						<a>Home</a>
						<a>Archive</a>
						<a>Options</a>
						<a>About</a>
					</div>
				</div>
				<UnsplashGrid />
			</div>
		);
	}
}

export default Home;
