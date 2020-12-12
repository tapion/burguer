import classes from './SideDrawerToggle.module.css';

const sideDrawerToggle = props => (
    <div className={classes.DrawerToggle} onClick={props.showSideDrawer}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerToggle;