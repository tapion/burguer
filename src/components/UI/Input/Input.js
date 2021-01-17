import classes from './Input.module.css';

const input = (props) => {
    let imputVariable = '';
    switch(props.typeInput){
        case ('textarea'):
            imputVariable = <textarea className={classes.InputElement} {...props} />;
            break;
        default:
            imputVariable = <input className={classes.InputElement} {...props} />;
            break;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {imputVariable}
        </div>
    );
}

export default input;