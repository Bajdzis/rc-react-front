/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import Image from './Image';
import Thumbs from './Thumb';
import Button from './Button';
import Icon from './Icon';


class GalleryArrow extends Component {
	render() {
		return <a {...this.props} className={"arrow arrow" + this.props.dir.toUpperCase()} href="#"><Icon name={"circle-arrow-" + this.props.dir}/></a>
	}
}
class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePhoto : 0
		};
		this.previewPhoto = this.previewPhoto.bind(this);
		this.nextPhoto = this.nextPhoto.bind(this);
	}

	nextPhoto() {
		if (this.state.activePhoto >= this.props.photosUrls.length - 1) {
			return;
		}
		this.setState({ activePhoto: this.state.activePhoto + 1 });
	}

	previewPhoto() {
		if (this.state.activePhoto <= 0) {
			return;
		}
		this.setState({ activePhoto: this.state.activePhoto - 1 })
	}

	render() {


		const thumbs = (<Thumbs
			thumbsUrl={this.props.photosUrls}
			onchange={(index) => {
				this.setState({ activePhoto: index })
			}}
		/>)


		return <div><Row>
				<Col xs={12} className="mainPhoto">
				<span onClick={this.previewPhoto}><GalleryArrow dir="left" /></span>
					<Image
						photosUrl = {this.props.photosUrls[this.state.activePhoto]}
					/>
				<span onClick={this.nextPhoto}><GalleryArrow dir="right" /></span>
				</Col>
			</Row>
			<Row>
				<Col xs={12} className="thumbs">
					{thumbs}


				 {/* {(()=>{
					const thumbs = [];
					for(let i = 0; i< 5; i++) {
						thumbs.push(<Image key={i}/>);
					}
					return <div>
						{thumbs}
					</div>;
				})()} */}
				</Col>
			</Row></div>;
	}
}

Gallery.defaultProps = {};

export default Gallery;
