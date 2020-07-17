import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { Link } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ClassSharpIcon from '@material-ui/icons/ClassSharp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CategoryIcon from '@material-ui/icons/Category';
import APP_CONSTANT from '../constants'
const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,

    },
    nested: {
      paddingLeft: theme.spacing(4),
      textOverflow: 'ellipsis',
      whiteSpace: 'normal'
    },
    items : {
        textOverflow: 'ellipsis',
        whiteSpace: 'normal'
    }
  });

class NestedList extends Component {

    constructor(props){
        super(props);
        this.state = {
            open : false,
            restaurantOpen : false
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = () => {
      this.setState({open : !this.state.open})
    };
    render(){
        const { classes } = this.props;
        return (
            <List>
                <ListItem button component={Link} href="/home">
                      <ListItemIcon>
                          <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.Dashboard} />
                  </ListItem>
                  <ListItem button component={Link} href="/restaurants">
                      <ListItemIcon>
                          <RestaurantIcon />
                      </ListItemIcon>
                      <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.Restaurants} />
                  </ListItem>
                <ListItem button component={Link} href="/notifications">
                        <ListItemIcon>
                            <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.Notifications} />
                </ListItem>
                  <ListItem button onClick={this.handleClick} className={classes.items}>
                      <ListItemIcon>
                          <ClassSharpIcon />
                      </ListItemIcon>
                  <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.RestaurantOptions} />
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                      <ListItem button className={classes.nested} component={Link} href="/cuisines">
                      <ListItemIcon>
                          <FastfoodIcon />
                      </ListItemIcon>
                      <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.Cuisines} />
                      </ListItem>
                      <ListItem button className={classes.nested} component={Link} href="/brands">
                      <ListItemIcon>
                          <RestaurantMenuIcon />
                      </ListItemIcon>
                      <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.Brands} />
                      </ListItem>
                      <ListItem button className={classes.nested} component={Link} href="/hubs">
                      <ListItemIcon>
                          <DeviceHubIcon />
                      </ListItemIcon>
                      <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.Hubs} />
                      </ListItem>
                      <ListItem button className={classes.nested} component={Link} href="/segments">
                      <ListItemIcon>
                          <DriveEtaIcon />
                      </ListItemIcon>
                      <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.Segments} />
                      </ListItem>
                      <ListItem button className={classes.nested} component={Link} href="/prices">
                      <ListItemIcon>
                          <MonetizationOnIcon />
                      </ListItemIcon>
                      <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.PricingCategories} />
                      </ListItem>
                      <ListItem button className={classes.nested}  component={Link} href="/categories">
                      <ListItemIcon>
                          <CategoryIcon/>
                      </ListItemIcon>
                      <ListItemText primary={APP_CONSTANT.APP_CONSTANTS.sideNav.OtherCat} />
                      </ListItem>

                  </List>
                  </Collapse>
            </List>

          );
    }

  }
  export default (withStyles(styles)(NestedList))
