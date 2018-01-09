/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import Gallery from '../components/Gallery';
import Description from '../components/Description';
import Tabs from '../components/Description';

class Pinfo extends Component {
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
		return (
			<Grid>
				<Row>
					<Col xs={12} md={6}>
							<Gallery 

							/>
					</Col>
					<Col xs={12} md={6}>
							<Description 
								
							/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<Tabs />
					</Col>
				</Row>
			</Grid>
		);
	}
}

Pinfo.defaultProps = {};

export default Pinfo;