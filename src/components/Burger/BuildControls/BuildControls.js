import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctr => (
            <BuildControl key={ctr.label} 
                label={ctr.label} 
                disabled={props.disabled[ctr.type]}
                addAction={props.ingredientsAdd.bind(null,ctr.type)} 
                delAction={props.ingredientsDel.bind(null,ctr.type)} />
        ))}
        <button className={classes.OrderButton} onClick={props.showModal} disabled={!props.purchasable}>Check out</button>
    </div>
)

export default buildControls;