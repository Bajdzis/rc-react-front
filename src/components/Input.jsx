/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import Icon from './Icon';
export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: 1
		};
		this.increaseInputValue = this.increaseInputValue.bind(this);
		this.decreaseInputValue = this.decreaseInputValue.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	increaseInputValue() {
		this.setState({ inputValue: this.state.inputValue + 1 });
	}

	decreaseInputValue() {
		if (this.state.inputValue <= 1) {
			return;
		}
		this.setState({ inputValue: this.state.inputValue - 1 });
	}

	handleChange(event) {
		this.setState({ inputValue: event.target.value });
	}

	render() {
		return (
			<span>
				<a href="#" onClick={this.decreaseInputValue}>
					<Icon className="pinfo-add" name="minus" />
				</a>
				<input type="text" onChange={this.handleChange} value={this.state.inputValue} />
				<a href="#" onClick={this.increaseInputValue}>
					<Icon className="pinfo-remove" name="plus" />
				</a>
			</span>
		) 
	}
}

Input.defaultProps = {
	value: 1
};
