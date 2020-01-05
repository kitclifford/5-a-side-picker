import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import football_svg from '../../Media/svgs/soccer-ball.svg';

const PageHeader = ({ playersPerSide }) => (

    <Jumbotron className="header_jumbotron">
        <div className="page_header">
            <img className="football_header_icon" src={ football_svg } alt='Football SVG icon'/>
            <div className="header_text">
                <h1>Football Team Picker</h1>
                <h2>{ playersPerSide }-a-side</h2>
            </div>
            <img className="football_header_icon" src={ football_svg } alt='Football SVG icon'/>
        </div>
    </Jumbotron>

);

export default PageHeader;