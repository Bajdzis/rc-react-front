import React from 'react';
import PropTypes from 'prop-types';

export default class Thumbs extends React.Component {

    render() {
        return (<div className="thumbs">

            {this.props.thumbsUrl.map((url, index) => {
                return <img key={index} className="thumbsImg" src={url} onClick={() => { this.props.onchange(index) }} />;
            })}
        </div>);
    }
}

Thumbs.propTypes = {
    thumbsUrl: PropTypes.array,
    onchange: PropTypes.func
}