import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import APP_CONSTANT from '../constants'

export class OperatingHours extends Component {

    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const {values} = this.props;
        console.log(this.props)
       
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
                
                <div style={{display:'flex', flexDirection:'row', marginTop: '10px'}}>
                <div style={{width:150, marginTop: '30px', marginRight:'10px'}}>
                <FormControlLabel
                value="monday"
                control={<Checkbox onChange={this.props.mondayChecked} color="primary" />}
                label="Monday"
                labelPlacement="end"
                />
                </div>
                <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="openinghoursmonday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.openhourMonday}
                    name="openinghoursmonday"
                    style={{ width: 150 }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="closinghoursMonday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.closehoursMonday}
                    name="closinghoursMonday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenTo} variant="outlined"  />}
                  />
                  <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="breakopeninghoursmonday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakopenhourMonday}
                    name="breakopeninghoursmonday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="breakclosinghoursMonday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakclosehoursMonday}
                    name="breakclosinghoursMonday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakTo} variant="outlined"  />}
                  />
                
                </div>
                <div style={{display:'flex', flexDirection:'row', marginTop: '10px'}}>
                <div style={{width:150, marginTop: '30px', marginRight:'10px'}}>
                <FormControlLabel
                value="tuesday"
                control={<Checkbox onChange={this.props.tuesdayChecked} color="primary" />}
                label="Tuesday"
                labelPlacement="end"
                />
                </div>
                <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="openinghoursTuesday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.openhourTuesday}
                    name="openinghoursTuesday"
                    style={{ width: 150 }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="closinghoursTuesday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.closehoursTuesday}
                    name="closinghoursTuesday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenTo} variant="outlined"  />}
                  />
                   <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="breakopeninghoursTuesday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakopenhourTuesday}
                    name="breakopeninghoursTuesday"
                    style={{ width: 150,marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="breakclosinghoursTuesday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakclosehoursTuesday}
                    name="breakclosinghoursTuesday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakTo} variant="outlined"  />}
                  />
                
                </div>
                <div style={{display:'flex', flexDirection:'row', marginTop: '10px'}}>
                <div style={{width:150, marginTop: '30px', marginRight:'10px'}}>
                <FormControlLabel
                value="wednesday"
                control={<Checkbox onChange={this.props.wednesdayChecked} color="primary" />}
                label="Wednesday"
                labelPlacement="end"
                />
                </div>
                <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="openinghoursWednesDay"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.openhourWednesday}
                    name="openinghoursWednesDay"
                    style={{ width: 150 }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="closinghoursWdednesday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.closehoursWednesday}
                    name="closinghoursWdednesday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenTo} variant="outlined"  />}
                  />
                  <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="breakopeninghoursWednesDay"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakopenhourWednesday}
                    name="breakopeninghoursWednesDay"
                    style={{ width: 150,marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="breakclosinghoursWdednesday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakclosehoursWednesday}
                    name="breakclosinghoursWdednesday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakTo} variant="outlined"  />}
                  />
               
                </div>
                <div style={{display:'flex', flexDirection:'row', marginTop: '10px'}}>
                <div style={{width:150, marginTop: '30px', marginRight:'10px'}}>
                <FormControlLabel
                value="thursday"
                control={<Checkbox onChange={this.props.thursdayChecked} color="primary" />}
                label="Thursday"
                labelPlacement="end"
                />
                </div>
                <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="openinghoursThursday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.openhourThursday}
                    name="openinghoursThursday"
                    style={{ width: 150 }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="closinghoursThursday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.closehoursThursday}
                    name="closinghoursThursday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenTo} variant="outlined"  />}
                  />
                  <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="breakopeninghoursThursday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakopenhourThursdday}
                    name="breakopeninghoursThursday"
                    style={{ width: 150 ,marginLeft: '30px'}}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="breakclosinghoursThursday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakclosehoursThursday}
                    name="breakclosinghoursThursday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakTo} variant="outlined"  />}
                  />
                
                </div>
                <div style={{display:'flex', flexDirection:'row', marginTop: '10px'}}>
                <div style={{width:150, marginTop: '30px', marginRight:'10px'}}>
                <FormControlLabel
                value="friday"
                control={<Checkbox onChange={this.props.fridayChecked} color="primary" />}
                label="Friday"
                labelPlacement="end"
                />
                </div>
                <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="openinghoursFriday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.openhourFriday}
                    name="openinghoursFriday"
                    style={{ width: 150 }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="closinghoursFriday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.closehoursFriday}
                    name="closinghoursFriday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenTo} variant="outlined"  />}
                  />
                   <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="breakopeninghoursFriday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakopenhourFriday}
                    name="openinghoursFriday"
                    style={{ width: 150, marginLeft : '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="breakclosinghoursFriday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakclosehoursFriday}
                    name="breakclosinghoursFriday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakTo}variant="outlined"  />}
                  />
                
                </div>
                <div style={{display:'flex', flexDirection:'row', marginTop: '10px'}}>
                <div style={{width:150, marginTop: '30px', marginRight:'10px'}}>
                <FormControlLabel
                value="saturday"
                control={<Checkbox onChange={this.props.saturdayChecked} color="primary" />}
                label="Saturday"
                labelPlacement="end"
                />
                </div>
                <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="openinghoursSaturday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.openhoursSaturday}
                    name="openinghoursSaturday"
                    style={{ width: 150 }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="closinghoursSaturday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.closehoursSaturday}
                    name="closinghoursSaturday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenTo} variant="outlined"  />}
                  />
                  <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="breakopeninghoursSaturday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakopenhoursSaturday}
                    name="breakopeninghoursSaturday"
                    style={{ width: 150,marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="breakclosinghoursSaturday"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakclosehoursSaturday}
                    name="breakclosinghoursSaturday"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakTo} variant="outlined"  />}
                  />
               
                </div>
                <div style={{display:'flex', flexDirection:'row', marginTop: '10px'}}>
                <div style={{width:150, marginTop: '30px', marginRight:'10px'}}>
                <FormControlLabel
                value="sunday"
                control={<Checkbox onChange={this.props.sundayChecked} color="primary" />}
                label="Sunday"
                labelPlacement="end"
                />
                    </div>
                <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="openinghours"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.openhourSunday}
                    name="openinghours"
                    style={{ width: 150 }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="closinghours"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.closehoursSunday}
                    name="closinghours"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenTo} variant="outlined"  />}
                  />
                  <Autocomplete
                    className={this.props.utility.classes.autoComplete}
                    id="breakopeninghours"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakopenhourSunday}
                    name="breakopeninghours"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakFrom} variant="outlined"  />}
                  />
                    <Autocomplete 
                    className={this.props.utility.classes.autoComplete}
                    id="breakclosinghours"
                    required
                    options={daysofTime}
                    getOptionLabel={(option) => option.time}
                    onChange={this.props.breakclosehoursSunday}
                    name="breakclosinghours"
                    style={{ width: 150, marginLeft: '30px' }}
                    renderInput={(params) => <TextField {...params}  label={APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakTo} variant="outlined"  />}
                  />
               
                </div>
                <div style={{marginTop : '20px', marginBottom : '20px'}}>
                <Button
                onClick = {this.props.addOperatingHours}
                variant="contained"
                color="primary"
                style={{width: '40%'}}
                >
                {APP_CONSTANT.APP_CONSTANTS.OperatingHours.AddOpHours}
                </Button>
                <TableContainer>
                <Table stickyHeader  aria-label="sticky table">
                <TableHead>  

                    <TableRow>
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.OperatingHours.Weekday}</TableCell>  
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenFrom}</TableCell>
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.OperatingHours.OpenTo}</TableCell>
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakFrom}</TableCell>
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.OperatingHours.BreakTo}</TableCell>
                </TableRow>  

                </TableHead>  
                <TableBody>
                {
                values.operatingHours.map((n, index)  => {
                    return <TableRow key={index} >
                        
                    <TableCell>{n.weekday}</TableCell>
                    <TableCell>{n.openfrom}</TableCell>
                    <TableCell>{n.opento}</TableCell>
                    <TableCell>{n.breakfrom}</TableCell>
                    <TableCell>{n.breakto}</TableCell>
                    </TableRow>
                    
                })
                }
                </TableBody>
                </Table>
                </TableContainer>
                
                </div>
                


                <div style={{display: 'flex', flexDirection :'row', marginTop: '10px'}}>
                    <Button
                    onClick = {this.previous}
                    variant="contained"
                    color="primary"
                    style={{width: '20%', marginRight:'30px'}}
                    >
                   {APP_CONSTANT.APP_CONSTANTS.OperatingHours.Previous}
                    </Button>

                    <Button
                    onClick = {this.continue}
                    variant="contained"
                    color="primary"
                    style={{width: '30%'}}
                    >
                   {APP_CONSTANT.APP_CONSTANTS.OperatingHours.Continue}
                    </Button>
                   

                </div>
            </React.Fragment>
                
            
        )
    }
   
}
export default OperatingHours
