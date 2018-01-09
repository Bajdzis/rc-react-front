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
		return <button {...this.props} className="btn">{this.props.icon?<Icon name={this.props.icon}/>:null}{this.props.children}</button>;
	}
}

Button.defaultProps = {};

export default Button;