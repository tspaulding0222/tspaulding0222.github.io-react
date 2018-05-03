import React from "react";
import PropTypes from "prop-types";

class UnsplashImage extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {}
		};
    }
    
	componentWillMount() {
		var data = this.props.history.location.state;
		this.setState({
			data: data
		});
	}

	renderImage() {
		return (
			<div className="unsplash-image">
				<div className="unsplash-image-header">
					<h2>Location: {this.state.data.user.location}</h2>
					<h3>
						Artist: {this.state.data.user.first_name}{" "}
						{this.state.data.user.last_name}
					</h3>
				</div>
				<img
					className="unsplash-image-img"
					src={this.state.data.urls.regular}
				/>
			</div>
		);
	}

	renderEpicFail() {
		<div className="no-unsplash-image">
			<span className="epic-fail-word">E</span>
			<span className="epic-fail-word">p</span>
			<span className="epic-fail-word">i</span>
			<span className="epic-fail-word">c</span>
			<span className="epic-fail-word" />
			<span className="epic-fail-word">F</span>
			<span className="epic-fail-word">a</span>
			<span className="epic-fail-word">i</span>
			<span className="epic-fail-word">l</span>
		</div>;
	}

	render() {
        var renderSection = this.renderEpicFail();
        if(this.state.data) {
            renderSection = this.renderImage();
        }

		return (
            <div className="unsplash-img-container">
                {renderSection}
            </div>
        );
	}
}

module.exports = UnsplashImage;
