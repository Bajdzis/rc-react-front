/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";

class Image extends Component {
	constructor(props) {
		super(props);
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
		return <img src="http://static1.redcart.pl/templates/images/thumb/17604/1500/1500/pl/0/templates/images/products/17604/34b0c831886d0a62c2001d9604214f65.jpg"/>;
	}
}

Image.defaultProps = {};

export default Image;