/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import Description from '../components/Description';
import Thumb from "../components/Thumb";


class Pinfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Gallery = this.props.galleryComponent;
		const Tabs = this.props.tabsComponent;
		const Description = this.props.descriptionComponent;

		return (
			<Grid>
				<Row>
					<Col xs={12} md={5}>
						<Gallery
							photosUrls={[
								"http://static3.redcart.pl/templates/images/thumb/17604/1500/1500/pl/0/templates/images/products/17604/dfd3175b8c36cad2de375c56a6ea6cac.jpg",
								"http://static5.redcart.pl/templates/images/thumb/17604/1500/1500/pl/0/templates/images/products/17604/33a82c1561de501102275097c49f1d15.jpg",
								"http://static2.redcart.pl/templates/images/thumb/17604/1500/1500/pl/0/templates/images/products/17604/ace1f4541e4ef77a2245d163af37048d.jpg",
								"http://static3.redcart.pl/templates/images/thumb/17604/1500/1500/pl/0/templates/images/products/17604/dfd3175b8c36cad2de375c56a6ea6cac.jpg",
								"http://static5.redcart.pl/templates/images/thumb/17604/1500/1500/pl/0/templates/images/products/17604/33a82c1561de501102275097c49f1d15.jpg"
							]}

							thumbComponent={Thumb}
							iconComponent={this.props.iconComponent}
						/>
					</Col>
					<Col xs={12} xsOffset={0} md={6} mdOffset={1}>
						<Description 
							tagComponent={this.props.tagComponent}
							iconComponent={this.props.iconComponent}
							price = "299,99 pln"
							optionComponent={this.props.optionComponent}
							buttonComponent={this.props.buttonComponent}
						/>
					</Col>
					<Col xs={12}>
						<Tabs 
							headers={[
								"opis produktu",
								"specyfikacja"
							]}
							contents={[
								"Awama A23 bluzka Elegancka koszula, wykonana z delikatnie przejrzystego materiału. Przód zapinany na guziki, ukryte pod plisą w kontrastowym kolorze. Góra zakończona kołnierzykiem. Luźny krój sprawia, że doskonale układa się na każdej sylwetce.",
								"Klatka piersiowa: 	100 Obwód w pasie: 	80 Biodra: 	60 Długość rękawa: 	50 Długość: 	40"
							]}
							tagComponent={this.props.tagComponent}					
						/>
					
					</Col>
				</Row>
			</Grid>
		);
	}

	// renderowanie_innego_grida_dla_dziwnego_klienta() {
	// 	return (
	// 		<Grid>
	// 			<Row>
	// 				<Col xs={12}>
	// 					{/* Nazwa produktu w zupełnie innym miejscu */}
	// 					<Title />
	// 				</Col>
	// 				<Col xs={12} md={6}>
	// 					<Gallery />
	// 				</Col>
	// 				<Col xs={12} md={6}>
	// 					<Row>
	// 						{/* Odwrotna kolejność AddToCart i Price */}
	// 						<Col xs={6}>
	// 							<AddToCart />
	// 						</Col>
	// 						<Col xs={6}>
	// 							<Price />
	// 						</Col>
	// 					</Row>
	// 				</Col>
	// 				<Col xs={12}>
	// 					<Tabs />
	// 				</Col>
	// 			</Row>
	// 		</Grid>
	// 	);
	// }
}

Pinfo.defaultProps = {
	name:"Nazwa produktu"
};

export default Pinfo;