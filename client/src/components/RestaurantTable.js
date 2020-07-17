import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from '../api'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarApp from './AppBarApp'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditIcon from "@material-ui/icons/Edit";
import IconButton from '@material-ui/core/IconButton';
import {withRouter, Redirect} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import APP_CONSTANT from '../constants'
const drawerWidth = 240;
const styles = theme => ({
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
      TableContainer:{
          margin : theme.spacing(2),
          maxHeight: '75vh',
          width: '100%'
      },
      card: {
        maxWidth: 345,
        margin : theme.spacing(2)
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      paper1: {
        //marginTop: theme.spacing(8),
        display: 'flex',
        width:'100%',
        flexDirection: 'column',
        //alignItems: 'center',
      },
    });
export class RestaurantTable extends Component {

  constructor(props) {

    super(props)

    this.state = {
      RestaurantData: [],
      naviagate :false,
      id : ''
    }
  }

  componentDidMount() {
    API.get('/restaurants').then(response => {
      let lengthOfData = (response.data || []).length;
      if(lengthOfData) {
        for(let index = 0; index < lengthOfData; index++) {
          let lengthOfRating = (response.data[index].rest_ratings || []).length;
          let sum = this.addNumbers(response.data[index].rest_ratings || []);
          if(!sum) {
            response.data[index].rating = sum;
          } else {
            response.data[index].rating = Number((sum / lengthOfRating).toFixed(2));
          }
        }
      }

      this.setState({
        RestaurantData: response.data
      });
    });
  }

  /**
   * Add numbers (All number)
   * @param arrayOfValues
   */
  addNumbers(arrayOfValues){
    let lengthOfArrayValues = arrayOfValues.length, sum = 0;
    for (let index = 0; index < lengthOfArrayValues; index++) {
      sum = Number(sum + arrayOfValues[index]);
    }
    return Number(sum.toFixed(2));
  };

  render() {
    if(this.state.naviagate){
        return <Redirect to={"/restaurantedit/"+ this.state.id} />
    }
    const editIcon = (
        <IconButton>
        <EditIcon color="primary" />
        </IconButton>
    );

    const { classes } = this.props;
    return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBarApp name='Restuarant'/>
    <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
        <div className={classes.paper1}>
        <Typography component="h1" variant="h5">
        {APP_CONSTANT.APP_CONSTANTS.RestTable.RestuarantList}
    </Typography>
      <TableContainer component={Paper} className={classes.TableContainer}>
        <Table stickyHeader  aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>{APP_CONSTANT.APP_CONSTANTS.RestTable.RestName}</TableCell>
              <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestTable.RestLoc}</TableCell>
              <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestTable.RestSubLoc}</TableCell>
              <TableCell align="left" >{APP_CONSTANT.APP_CONSTANTS.RestTable.RestaurantCuisine}</TableCell>
              <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestTable.RestaurantType}</TableCell>
              <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestTable.RestaurantStatus}</TableCell>
              <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestTable.RestRatings}</TableCell>

              <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestTable.Rating}</TableCell>
              <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestTable.Actions}</TableCell>
          </TableRow>

          </TableHead>
          <TableBody>
            {
              this.state.RestaurantData.map((p, index) => {
                return <TableRow key={index}>
                  <TableCell align="left">{p.rest_name}</TableCell>
                  <TableCell align="left">{p.rest_location}</TableCell>
                  <TableCell align="left">{p.rest_sublocation}</TableCell>
                  <TableCell align="left">{p.rest_cuisine_name}</TableCell>
                  <TableCell align="left">{p.rest_segment_name}</TableCell>
                  <TableCell align="left">{p.status}</TableCell>
                  <TableCell align="left">
                    <Rating name="half-rating" defaultValue={p.rating} precision={0.5} readOnly={true}/>
                  </TableCell>
                  <TableCell align="left">
                    <Button color="primary" onClick={() => {
                      return this.props.history.push("/restauranterating/"+ p.id);
                    }}>View</Button>
                  </TableCell>
                  <TableCell component="th" scope="row" onClick={(event) => this.setState({naviagate:true,id:p.id})}>
                            {editIcon}
                  </TableCell>
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      </div>


    </Grid>
    </Container>
    </main>

</div>

    );

  }

}

export default withRouter((withStyles(styles)(RestaurantTable)))
