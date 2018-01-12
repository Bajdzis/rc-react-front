import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

export default class Stars extends React.Component {
	createStars() {
		let stars = [];
		for (let i = 0; i < this.props.length; i++) {
			stars.push(<Icon key={i} className="pinfo-star" name="star-empty"/>);
		}
		return (<span> {stars} </span>);
	};

	render() {
		return (<div className="stars">
			{this.createStars()}
		</div>);
	}
}
Stars.propTypes = {
	thumbsUrl: PropTypes.array,
	onchange: PropTypes.func
};