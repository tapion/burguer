import classes from './Toolbar.module.css'
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationsItems/NavigationItems';
import SideDrawerToggle from './../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <SideDrawerToggle showSideDrawer={props.showSideDrawer} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;