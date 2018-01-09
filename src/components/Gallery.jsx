/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import Image from './Image';
import Button from './Button';
import Icon from './Icon';


class GalleryArrow extends Component {
	render() {
		return <a className={"arrow arrow" + this.props.dir.toUpperCase()} href="#"><Icon name={"circle-arrow-" + this.props.dir}/></a>
	}
}
class Gallery extends Component {
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
		return <div><Row>
				<Col xs={12} className="mainPhoto">
					<GalleryArrow dir="left" />
					<Image /> 
					<GalleryArrow dir="right" />
				</Col>
			</Row>
			<Row>
				<Col xs={12} className="thumbs">
				{(()=>{
					const thumbs = [];
					for(let i = 0; i< 5; i++) {
						thumbs.push(<Image key={i}/>);
					}
					return <div>
						{thumbs}
					</div>;
				})()}
				</Col>
			</Row></div>;
	}
}

Gallery.defaultProps = {};

export default Gallery;
