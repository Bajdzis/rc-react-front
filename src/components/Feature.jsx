import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";
import {Grid, Row, Col} from "react-bootstrap";
import {Transition, TransitionGroup} from "react-transition-group";

const duration = 800;
const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0
};
const transitionStyles = {
	entering: {opacity: 0},
	entered: {opacity: 1}
};
export default class Feature extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeColor: null,
			activeSize: null,
			show: false
		};
	}

	activeColor(color) {
		if (this.state.activeColor !== null) {
			this.setState({show: !!this.state.show});
		} else {
			this.setState({show: !this.state.show});
		}
		if (this.state.activeColor === color) {
			this.setState({activeColor: null});
			return;
		}
		this.setState({activeColor: color});
	}

	activeSize(size) {
		this.setState({activeSize: size});
	}

	removeActiveSize() {
		this.setState({activeSize: null});
	}

	render() {
		const colorItems = this.props.colours.map((color, index) => (<a key={index} className={this.state.activeColor === color ? "active colours" : "colours"} onClick={() => {
			this.activeColor(color);
			this.removeActiveSize();
		}} title={color.name} style={{background: color.color}}/>));
		let sizesContainer = null;
		if (this.state.activeColor) {
			let sizes = Object.keys(this.state.activeColor.items).map((size) => {
				let quantity = this.state.activeColor.items[size];
				return (<a className={this.state.activeSize === size ? "active rozmiary" : "rozmiary"} disabled={quantity <= 0 && "data-role=\"disabled\""} key={size} onClick={() => {
					this.activeSize(size);
				}}> <span> {size} </span> </a>);
			});
			sizesContainer = (<div className="sizesContainer">
				<Tag name="h4" className="container-title"> Wybierz rozmiar: </Tag> {sizes}
			</div>);
		}
		const Fade = ({in: inProp}) => (<Transition in={inProp} timeout={duration}>
			{(state) => (<div style={{
				...defaultStyle, ...transitionStyles[state]
			}}>
				{sizesContainer}
			</div>)}
		</Transition>);
		return (<Row className="pinfo-features"> <Col xs={6}> <Tag name="h4" className="container-title"> Wybierz kolor: </Tag> {colorItems}
		</Col> <Col xs={6}> <Fade in={this.state.show}/> </Col> </Row>);
	}
}
