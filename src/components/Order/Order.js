import classes from './Order.module.css';

const order = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(ing => {
            return <span
                        style={{
                            textTransform: 'capitalize',
                            display: 'inline-block',
                            margin: '0 8px',
                            border: '1px solid #ccc',
                            padding: '5px'
                        }}>{ing} ({props.ingredients[ing]})</span>
            // return {ingredient: ing, unit:props.ingredients[ing] }
        });
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong> USD {props.totalPrice} </strong></p>
        </div>
    );
}

export default order;