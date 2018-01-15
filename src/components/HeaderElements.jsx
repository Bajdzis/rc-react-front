import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Button from './Button';
import HeaderCart from './HeaderCart';

export default class HeaderElements extends Component {
	constructor(props) {
		super(props);
    }
    


	render() {
		return (
			<Col xs={8} className="header-logo vertical-center text-right">
				<HeaderCart href="#"/>
			</Col>
		);
	}
}
HeaderElements.defaultProps = {};
