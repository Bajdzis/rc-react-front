import React from 'react';
import PropTypes from 'prop-types';


export default class Stars extends React.Component {
    Icon = this.props.iconComponent;
    createStars() {
        const Icon = this.Icon;
        let stars = [];
        for (let i = 0; i < this.props.length; i++) {
            stars.push(<Icon key={i} className="pinfo-star" name="star-empty" />);
            
        }

        return (
            <span> {stars} </span>
        )
    };
   
    render() {

        return (<div className="stars">

            {this.createStars()}

        </div>);
    }
}

Stars.propTypes = {
    thumbsUrl: PropTypes.array,
    onchange: PropTypes.func
}