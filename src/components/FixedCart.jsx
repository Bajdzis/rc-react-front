/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import Icon from './Icon';
import { Grid, Row, Col } from 'react-bootstrap';

export default class FixedCart extends Component {
	constructor(props) {
		super(props);
	}

	removeCart(event) {
		var cart = document.querySelector('.cart-fixed');
        var cartPreview = document.querySelector('.cartPreview');
        if (event.target != document.querySelector('.remove-cart')) {
		    cartPreview.addEventListener('click', function(e) {
			
				e.stopPropagation();
			
		});
        }
		cart.classList.remove('cart-visible');
	}

	render() {
		return (
			<div className="cart-fixed" onClick={this.removeCart}>
				<div className="cartBackground" />
				<div className="cartPreview">
					Koszyk{' '}
					<a className="remove-cart" href="javascript:;">
						<Icon name="remove" />
					</a>
				</div>
			</div>
		);
	}
}
