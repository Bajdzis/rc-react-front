import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Logo from './Logo';
import HeaderElements from './HeaderElements';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Row >
            <Logo
                src="http://static3.redcart.pl/templates/images/thumb/17604/370/80/pl/0/templates/images/logo/17604/074523feb47615845f06f03c6b9132f4.png"
            />
            <HeaderElements/>
         
        </Row>);
    }
}
Header.defaultProps = {};
