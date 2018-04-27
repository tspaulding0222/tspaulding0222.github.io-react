import React from 'react';
import Common from '../scripts/common';
import EyeImg from '../../static/img/eye.png';

class Hello extends React.Component {
    render() {
        return (
            <div className="hello">
                <img src={EyeImg} />
                <div className="test">Test 2</div>
            </div>
        )
    }
}

module.exports = Hello;