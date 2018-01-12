/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import Icon from "./Icon";

export default class Tag extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Tag = this.props.name;
		return <Tag {...this.props}> {this.props.children} </Tag>;
		;
	}
}
Tag.defaultProps = {
	tag: "h1"
};
