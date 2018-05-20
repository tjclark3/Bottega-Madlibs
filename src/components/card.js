import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
    render() {
        return (
            <div className="card">
                { Input('Name') }
                { Input('Field Position') }
            </div>

        )
    }
}

export default Card;