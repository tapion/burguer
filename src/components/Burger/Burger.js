import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {    
    const middleIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])]
                .map((_,i) => {
                    return <BurgerIngredient type={ingredient} key={ingredient + i} />;
                })
        }).reduce((acc, el) => {
            return acc.concat(el);
        }, []);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {middleIngredients.length > 0 ? middleIngredients : <p>Please start adding ingredients</p>}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;