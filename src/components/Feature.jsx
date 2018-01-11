import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Feature extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeColor: null,
			activeSize: null
		};
	}

	activeColor(color) {
		this.setState({ activeColor: color });
	}

	activeSize(size) {
		this.setState({ activeSize: size });
	}

	render() {
		const colorItems = this.props.colours.map((color, index) => (
			<a
				key={index}
				className={this.state.activeColor === color ? 'active colours' : 'colours'}
				onClick={() => {
					this.activeColor(color);
				}}
				title={color.name}
				style={{ background: color.color }}
			/>
		));

		let sizesContainer = null;
		if (this.state.activeColor) {
			let sizes = Object.keys(this.state.activeColor.items).map((size) => {
				let quantity = this.state.activeColor.items[size];
				return (
					quantity > 0 && (
						<a
							className={this.state.activeSize === size ? 'active rozmiary' : 'rozmiary'}
							key={size}
							onClick={() => {
								this.activeSize(size);
							}}
						>
							<span> {size} </span>
						</a>
					)
				);
			});
			sizesContainer = (
				<div className="sizesContainer">
					<Tag name="h4" className="container-title">
						Wybierz rozmiar:
					</Tag>
					{sizes}
				</div>
			);
		}

		/* {this.state.activeColor === color && Object.keys(color.items).map((item) => {
                    return <a className="rozmary" key={item}> {item} : {color.items[item]} </a>;

                })} */
		return (
			<Row className="pinfo-features">
				<Col xs={6}>
					<Tag name="h4" className="container-title">
						Wybierz kolor:
					</Tag>
					{colorItems}
				</Col>
				<Col xs={6}>{sizesContainer}</Col>
			</Row>
		);
	}
}
