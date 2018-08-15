import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'button'
        }
    }

    showSurprise() {
        // set a timeout to reset the display to button
        setTimeout(
            () => this.setState({
                display: 'button'
            }),
            6000 // 6 seconds
        );
        // now set the display to the image
        this.setState({
            display: 'surprise'
        });
    }
    render() {
        if (this.state.display === 'button') {
            return <SurpriseButton onClick={e => this.showSurprise()} />;
        }
        else {
            return <SurpriseImage />
        }
    }
}
