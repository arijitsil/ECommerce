import React from 'react';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NestedList from './sideNavs';
import loginAction from '../redux/login/loginActions';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Redirect } from 'react-router-dom'
import APP_CONSTANT from '../constants'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

function AppBarApp(props) {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpenMenu((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpenMenu(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenMenu(false);
        }
    }

    const prevOpen = React.useRef(openMenu);
    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    const showLogoutModal = async () => {
        setShowAlert(true);
    };

    const logout = async () => {
        sessionStorage.removeItem('jwtToken');
        props.logout();
        setShowAlert(false);
        setSuccess(true);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div>
            {success ? <Redirect to= {{ pathname: "/" }} /> : (null)}
            <div>
                <Dialog
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Logout Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {APP_CONSTANT.APP_CONSTANTS.AppBarApp.LogOutMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowAlert(false)} color="primary">
                            {APP_CONSTANT.APP_CONSTANTS.AppBarApp.Cancel}
                        </Button>
                        <Button onClick={logout} color="primary" autoFocus>
                        {APP_CONSTANT.APP_CONSTANTS.AppBarApp.Ok}
                        
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        <React.Fragment>

            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {props.name}
                    </Typography>


                    <IconButton color="inherit"
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}>
                        <AddBoxIcon/>
                        <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({TransitionProps, placement}) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={openMenu} id="menu-list-grow"
                                                      onKeyDown={handleListKeyDown}>
                                                <MenuItem component={Link} href="/hub/create">{APP_CONSTANT.APP_CONSTANTS.AppBarApp.AddHub}</MenuItem>
                                                <MenuItem component={Link} href="/menutype/create">{APP_CONSTANT.APP_CONSTANTS.AppBarApp.AddCuisine}</MenuItem>
                                                <MenuItem component={Link} href="/costtype/create">{APP_CONSTANT.APP_CONSTANTS.AppBarApp.AddPricingCategory}</MenuItem>
                                                <MenuItem component={Link} href="/category/create">{APP_CONSTANT.APP_CONSTANTS.AppBarApp.AddOtherCategory}</MenuItem>
                                                <MenuItem component={Link} href="/segment/create">{APP_CONSTANT.APP_CONSTANTS.AppBarApp.AddRestTypes}</MenuItem>
                                                <MenuItem component={Link} href="/brand/create">{APP_CONSTANT.APP_CONSTANTS.AppBarApp.AddBrand}</MenuItem>
                                                <MenuItem component={Link} href="/restaurant/create">{APP_CONSTANT.APP_CONSTANTS.AppBarApp.AddRest}</MenuItem>
                                                <MenuItem component={Link} href="/notifications/create">{APP_CONSTANT.APP_CONSTANTS.AppBarApp.AddPromotion}</MenuItem>

                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </IconButton>
                    <IconButton color="inherit" onClick={showLogoutModal}>
                        <ExitToAppIcon/>
                    </IconButton>


                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <NestedList/>
                <Divider/>

            </Drawer>
        </React.Fragment>
        </div>

    )
}

const mapStateToProps = state => {
    return{
        isLoggedIn : state.loginReducer.isLoggedIn,
        isAuthUser : state.loginReducer.isAuthUser
    }
};
const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(loginAction.logout())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AppBarApp);
