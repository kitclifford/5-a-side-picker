import React from 'react';
import { Button } from 'react-bootstrap';

const ResetButton = ({ reset }) => (

    <Button
        variant="light"
        onClick={ reset }
    >
        Reset
    </Button>

);

export default ResetButton;