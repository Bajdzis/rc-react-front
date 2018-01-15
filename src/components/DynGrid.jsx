/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Gallery from "./Gallery";
import Tabs from "./Tabs";
import Tag from "./Tag";
import Description from "./Description";
import Icon from "./Icon";
import Option from "./Option";
import Button from "./Button";
import Header from "./Header";
import FixedCart from "./FixedCart";

const Components = {
	Description: Description,
	Gallery: Gallery,
	Tabs,
	Header,
	FixedCart
};

class DynGrid extends Component {
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
		return (<Grid>
			{this.props.lay.grid.rows.map((row, i) => {
				return (<Row key={i}>
					{row.cols.map((col, i) => {
						const Component = Components[col.component.name];
						return (<Col {...col.props} key={i}> <Component {...col.component.props} /> </Col>);
					})}
				</Row>);
			})}</Grid>);
	}
}

DynGrid.defaultProps = {};
export default DynGrid;