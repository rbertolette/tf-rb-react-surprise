import React from 'react';
import SurpriseImage from './surprise-image';

export default class SurpriseButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }

    setClicked(isClicked) {
        this.setState({
            isClicked
        })
    }


    render() {
        if (!this.state.isClicked) {
            return (
                <button type="button" onClick={() => this.setClicked(true)}>Surprise!</button>
            );
        }
        else {
            setTimeout(() => {
                this.setClicked(false);
            }, 6000);
            return <SurpriseImage />;
        }
    }
}
