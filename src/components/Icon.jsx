/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, { Component } from "react";


export default class Icon extends Component {
	constructor(props) {
		super(props);
		this.set = { bootstrap: 'glyphicon glyphicon-' }
	}


	render() {
		return <span className={this.props.className + " glyphicon glyphicon-" + this.props.name}> </span>;
	}
}

Icon.defaultProps = {};