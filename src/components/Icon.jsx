/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, { Component } from "react";

class Icon extends Component {
	constructor(props) {
		super(props);
		this.set = { bootstrap: 'glyphicon glyphicon-' }
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
	}

	componentDidUpdate(prevProps, prevState) {
	}

	componentDidCatch(error, info) {
	}

	render() {
		return <span className={this.props.className + " glyphicon glyphicon-" + this.props.name}> </span>;
	}
}

Icon.defaultProps = {};

export default Icon;