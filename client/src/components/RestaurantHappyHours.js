import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from "@material-ui/icons/Edit";
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';
import APP_CONSTANT from '../constants'

export class RestaurantHappyHours extends Component {

    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleClick = (event, name) => {
       
        alert(name)
      };
    render() {
        const {values} = this.props;
        console.log(this.props);
        var deleteIcon =
        (<IconButton onClick={console.log("delete")}>
            <DeleteIcon color="secondary" />
        </IconButton>
        );

        const editIcon = (
            <IconButton onClick={console.log("edited")}>
            <EditIcon color="primary" />
            </IconButton>
        );
        const daysofTime = [
            {time : '00:00' , id :1},
            {time : '00:30' , id :2},
            {time : '01:00' , id :3},
            {time : '01:30' , id :4},
            {time : '02:00' , id :5},
            {time : '02:30' , id :6},
            {time : '03:00' , id :7},
            {time : '03:30' , id :8},
            {time : '04:00' , id :9},
            {time : '04:30' , id :10},
            {time : '05:00' , id :11},
            {time : '05:30' , id :12},
            {time : '06:00' , id :13},
            {time : '06:30' , id :14},
            {time : '07:00' , id :15},
            {time : '07:30' , id :16},
            {time : '08:00' , id :17},
            {time : '08:30' , id :18},
            {time : '09:00' , id :19},
            {time : '09:30' , id :20},
            {time : '10:00' , id :21},
            {time : '10:30' , id :22},
            {time : '11:00' , id :23},
            {time : '11:30' , id :24},
            {time : '12:00' , id :25},
            {time : '12:30' , id :26},
            {time : '13:00' , id :27},
            {time : '13:30' , id :28},
            {time : '14:00' , id :29},
            {time : '14:30' , id :30},
            {time : '15:00' , id :31},
            {time : '15:30' , id :32},
            {time : '16:00' , id :33},
            {time : '16:30' , id :34},
            {time : '17:00' , id :35},
            {time : '17:30' , id :36},
            {time : '18:00' , id :38},
            {time : '18:30' , id :39},
            {time : '19:00' , id :40},
            {time : '19:30' , id :41},
            {time : '20:00' , id :42},
            {time : '20:30' , id :43},
            {time : '21:00' , id :44},
            {time : '21:30' , id :45},
            {time : '22:00' , id :46},
            {time : '22:30' , id :47},
            {time : '23:00' , id :48},
            {time : '23:30' , id :49}
        ]
        return (
            <React.Fragment>
                <div style={{display:'flex', flexDirection:'column', marginTop: '10px'}}>

                <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="discounthours"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.onChangediscounthours}
                    name="discounthours"
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.RestHappy.DiscountHours} variant="outlined"  />}
                  />
                {values.showDiscountText ?
                <React.Fragment>
                   
                     <TextField style={{width:'80%'}}
                    variant="outlined"
                    margin="normal"
                    required
                    style = {{ width: '15%'}}
                    label ={APP_CONSTANT.APP_CONSTANTS.RestHappy.DiscountValue}
                    name ='discounttext'
                    value = {values.discountValue}
                    required
                    onChange = {this.props.onChangeDiscountText}
                    />
                     <TextField style={{width:'80%'}}
                    variant="outlined"
                    margin="normal"
                    required
                    style = {{ width: '15%'}}
                    label ={APP_CONSTANT.APP_CONSTANTS.RestHappy.SeatCount}
                    name ='seatValue'
                    value = {values.seatValue}
                    required
                    onChange = {this.props.onChangeSeatValue}
                    />
                <Button
                onClick = {this.props.addHappyHours}
                variant="contained"
                color="primary"
                style={{width: '10%'}}
                >
                {APP_CONSTANT.APP_CONSTANTS.RestHappy.AddDiscount}
                </Button>
                <TableContainer>
                <Table stickyHeader  aria-label="sticky table">
                <TableHead>  

                    <TableRow>  

                    <TableCell>{APP_CONSTANT.APP_CONSTANTS.RestHappy.Actions}</TableCell>  

                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestHappy.DiscountHours}</TableCell>  
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestHappy.DiscountValue}</TableCell>
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestHappy.SeatCount}</TableCell>
                </TableRow>  

                </TableHead>  
                <TableBody>
                {
                values.discountHours.map((n, index)  => {
                    return <TableRow key={index} >
                        <TableCell component="th" scope="row" onClick={(event) => this.props.deleteHappyHours(event,n.DiscountHours)}>
                            {deleteIcon}
                        </TableCell>
                        <TableCell>{n.DiscountHours}</TableCell>
                    <TableCell>{n.DiscountValue}</TableCell>
                    <TableCell>{n.SeatCount}</TableCell>
                    </TableRow>
                    
                })
                }
                </TableBody>
                </Table>
                </TableContainer>
                </React.Fragment>
               
                : 
                null}
                
                </div>
                


                <div style={{display: 'flex', flexDirection :'row', marginTop: '10px'}}>
                    <Button
                    onClick = {this.previous}
                    variant="contained"
                    color="primary"
                    style={{width: '20%', marginRight:'30px'}}
                    >
                    Previous
                    </Button>

                    <Button
                    onClick = {this.continue}
                    variant="contained"
                    color="primary"
                    style={{width: '20%'}}
                    >
                    Continue
                    </Button>
                   

                </div>
            </React.Fragment>
                
            
        )
    }
   
}
export default RestaurantHappyHours
