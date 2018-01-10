/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import Icon from './Icon';
class Button extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return <button className="btn" {...this.props}>{this.props.icon?<Icon name={this.props.icon}/>:null}{this.props.children}</button>;
	}
}

Button.defaultProps = {};

export default Button;