import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import football_svg from '../Media/svgs/soccer-ball.svg';

const PageHeader = () => (

    <Jumbotron>
        <div className="page_header">
            <img className="football_header_icon" src={ football_svg }/>
            <h1>5-a-side Football Team Picker</h1>
            <img className="football_header_icon" src={ football_svg }/>
        </div>
    </Jumbotron>

);

export default PageHeader;