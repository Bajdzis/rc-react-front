import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";


export default class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Col xs={4} className="header-logo  vertical-center">
           <img src={this.props.src} alt=""/>
        </Col>);
    }
}
Logo.defaultProps = {};
