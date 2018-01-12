/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
import React, {Component} from "react";
import Stars from './Stars';
import Tag from './Tag';
import Option from './Option';
import Button from './Button';

export default class Description extends Component {

	render() {

		return (
			<div className="pinfo-description">
			<Tag name="h1" className="pinfo-name"> Biały kubek XXL z Twoim nadrukiem Fotokubek</Tag>
			<Tag name="div" className="pinfo-stars">
				<Stars
						value={3}
						length={5}
				/>
			</Tag>
			<Tag name="div" className="pinfo-price"> {this.props.price}</Tag>
			<div className="pinfo-options">
				<Option
					titles={[
						"Model:",
						"Realizacja zamówienia:",
						"Wysyłka od:",
						"Producent:"
					]}
					description={[
						"A22E",
						"2-5 dni",
						"10.00 PLN",
						"Awama1"
					]}
				/>
			</div>
			<div className="pinfo-buyPanel">
					<Button className="btn btn-block btn-primary btn-large">Kup teraz</Button>
			</div>
			</div>
		)
	}
}

Description.defaultProps = {};