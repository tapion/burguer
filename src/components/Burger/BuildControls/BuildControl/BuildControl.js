import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} disabled={props.disabled} onClick={props.delAction}>Less</button>
        <button className={classes.More} onClick={props.addAction}>More</button>
    </div>
);

export default buildControl;