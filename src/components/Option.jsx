/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";

export default class Option extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div className="row">
			{this.props.titles.map((title, index) => {
				return (<div key={index} className="pinfo-options-block col-xs-6">
					{title}
					<div className="pinfo-options-description">{this.props.description[index]}</div>
				</div>);
			})}
		</div>);
	}
}
Option.defaultProps = {};
