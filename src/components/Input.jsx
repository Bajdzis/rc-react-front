/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import Icon from './Icon';
export default class Input extends Component {
	constructor(props) {
	super(props);
	this.state = {
		inputValue: 1
	};
	this.increaseInputValue = this.increaseInputValue.bind(this);
	this.decreaseInputValue = this.decreaseInputValue.bind(this);
}


increaseInputValue(){
	this.setState({ inputValue: this.state.inputValue + 1 });
}

decreaseInputValue(){
	this.setState({ inputValue: this.state.inputValue - 1 });
}

	render() {
		
		return (
			this.props.name === "product-input" ? <span> <a href="#" onClick={this.decreaseInputValue} ><Icon className="pinfo-add" name="minus" /></a> <input type="text" value={this.state.inputValue} /> 
			
				<a href="#" onClick={this.increaseInputValue}><Icon className="pinfo-remove" name="plus" /></a> </span>: <input type="text" value={this.props.value} />
		)
	}
}

Input.defaultProps = {
	
};
