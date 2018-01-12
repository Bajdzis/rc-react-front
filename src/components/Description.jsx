/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
import React, {Component} from "react";
import Stars from './Stars';
import Feature from './Feature';
import Input from './Input';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import Tag from './Tag';
import Option from './Option';
import Button from './Button';

export default class Description extends Component {

	render() {

		return (
			<div className="pinfo-description">
				<Tag name="h1" className="pinfo-name">
					{' '}
					Biały kubek XXL z Twoim nadrukiem Fotokubek
				</Tag>
				<Tag name="div" className="pinfo-stars">
					<Stars iconComponent={this.props.iconComponent} value={3} length={5} />
				</Tag>
				<Tag name="div" className="pinfo-price">
					{' '}
					{this.props.price}
				</Tag>
				<div className="pinfo-options">
					<Option
						titles={[ 'Model:', 'Realizacja zamówienia:', 'Wysyłka od:', 'Producent:' ]}
						description={[ 'A22E', '2-5 dni', '10.00 PLN', 'Awama1' ]}
					/>
				</div>
				<Tag name="div">
					<Feature
						colours={[
							{
								color: 'red',
								name: 'Czerwony',
								items: {
									s: 2,
									m: 0,
									l: 0,
									xl: 0,
									xxl: 1
								}
							},
							{
								color: 'blue',
								name: 'Niebieski',
								items: {
									s: 0,
									m: 1,
									l: 2,
									xl: 1,
									xxl: 0
								}
							},
							{
								color: 'pink',
								name: 'Różowy',
								items: {
									s: 2,
									m: 1,
									l: 1,
									xl: 3,
									xxl: 3
								}
							}
						]}
					/>
				</Tag>
				<Row className="pinfo-buyPanel">
					<Col xs={4} className="text-right product-input-flex">
						<Input

						name="product-input"

						/>
					</Col>
					<Col xs={8} className="">
						<Button className="btn btn-block btn-primary btn-large">Kup teraz</Button>
					</Col>
				</Row>
			</div>
		);
	}
}

Description.defaultProps = {};
