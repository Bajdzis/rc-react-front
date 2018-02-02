/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, { Component } from "react";
import Icon from "./Icon";

export default class HeaderCart extends Component {
    constructor(props) {
        super(props);
    }

    showCart(e) {
        var cart = document.querySelector('.cart-fixed');
        cart.classList.toggle('cart-visible');
        
    }


    render() {
        return <a onClick={this.showCart} href={this.props.href} className="header-shopping-cart"> <Icon name="shopping-cart"/> </a>
    }
}
