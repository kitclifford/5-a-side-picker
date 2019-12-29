import React from 'react';
import { Button } from 'react-bootstrap';

const ResetButton = ({ reset }) => (

    <Button
        onClick={ reset }
    >
        Reset
    </Button>

);

export default ResetButton;