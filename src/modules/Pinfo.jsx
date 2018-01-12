/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";
import DynGrid from "../components/DynGrid";
import lay from "../layouts/pinfo/default";

class Pinfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <DynGrid lay={lay}/>;
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
	name: "Nazwa produktu"
};
export default Pinfo;