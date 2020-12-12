import classes from './SideDrawer.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationsItems/NavigationItems';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Aux from './../../../hoc/Auxiliar';


const sideDrawer = props =>{
    let attachedClasess = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasess = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop 
                showModal={props.open}
                clicked={props.clicked} />
            <div className={attachedClasess.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;