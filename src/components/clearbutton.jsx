import React from 'react';
import './clearbutton.css';

export const ClearButton = (props) =>(
    <div className="clear-btn" onClick={props.handleClear}>
        {props.handleClear}Clear
    </div>
)