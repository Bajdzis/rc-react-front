/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";

class Image extends Component {
	constructor(props) {
		super(props);
		this.loadImg = this.loadImg.bind(this);
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

	loadImg(element) {
		this.img = element;
		if (element === null) {
			console.log("element jest odpinany nic z nim nie zrobie");
			return;
		}
		console.log(element);
		//w przeciwnym razie moge robić magie zwykłym JSem
		element.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 0px 5px 3px";
	}

	render() {
		return <img ref={this.loadImg} src={this.props.photosUrl}/>;
	}
}

Image.defaultProps = {};
export default Image;