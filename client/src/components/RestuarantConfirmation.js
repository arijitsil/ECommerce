import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import APP_CONSTANT from '../constants'
export class RestaurantConfirmation extends Component {

    
 
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values} = this.props;
        var cuisines = '';
        for(var i=0;i<values.cuisinesSubmitValue.length;i++){
            
            if(cuisines === ''){
                if(i==values.cuisinesSubmitValue.length-1){
                    cuisines = values.cuisinesSubmitValue[i].name
                }else{
                    cuisines = values.cuisinesSubmitValue[i].name + ","
                }
              
            }else{
                if(i==values.cuisinesSubmitValue.length-1){
                    cuisines = cuisines + values.cuisinesSubmitValue[i].name
                }else{
                    cuisines = cuisines + values.cuisinesSubmitValue[i].name + ","
                }
              
            }
        }
        var segments = '';
        for(var i=0;i<values.segmentSubmitValue.length;i++){
            
            if(segments === ''){
                if(i==values.segmentSubmitValue.length-1){
                    segments = values.segmentSubmitValue[i].name
                }else{
                    segments = values.segmentSubmitValue[i].name + ","
                }
              
            }else{
                if(i==values.segmentSubmitValue.length-1){
                    segments = segments + values.segmentSubmitValue[i].name
                }else{
                    segments = segments + values.segmentSubmitValue[i].name + ","
                }
              
            }
        }
        var hub = values.hubsSelectedValue.name;
        var cost = values.costTypeSubmitValue.name;
        var brand ='';
        console.log(values.brandSubmitValue)
        if(values.brandSubmitValue !== null && typeof values.brandSubmitValue !== 'undefined')
            brand = values.brandSubmitValue.name;
        return (
            <React.Fragment>
                
                <Typography component="h1" variant="h5">
                       {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestBasic}
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestName} secondary={values.rest_name}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestEmailAddress} secondary={values.email_address}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary = {APP_CONSTANT.APP_CONSTANTS.RestBasic.ContactNumber} secondary={values.phone_number}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.PricingLevel} secondary={values.pricingLevelSelectedValue.text}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.About} secondary={values.hubdesc}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.SpecialConditions} secondary={values.specialConditions}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestLoc} secondary={values.locationSelectedValue.name}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.SubLocationName} secondary={values.sublocationsSelectedValue.name}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.HubName} secondary={hub}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.Cusines} secondary={cuisines}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestaurantTypes} secondary={segments}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.CostCategory} secondary={cost}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.Brand} secondary={brand}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.Payment} secondary={values.paymentmode}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.Spoken} secondary={values.spoken_languages}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestaurantLatitude} secondary={values.lat}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.RestaurantLongitude} secondary={values.long}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary =  {APP_CONSTANT.APP_CONSTANTS.RestBasic.Address} secondary={values.address}/> 
                    </ListItem>
                    
                </List>
                <Typography component="h1" variant="h5">
                    {APP_CONSTANT.APP_CONSTANTS.RestHappy.DiscountHours}
                </Typography>
                <TableContainer>
                <Table stickyHeader  aria-label="sticky table">
                <TableHead>  

                    <TableRow>  

                    

                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestHappy.DiscountHours}</TableCell>  
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestHappy.DiscountValue}</TableCell>
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RestHappy.SeatCount}</TableCell>
                </TableRow>  

                </TableHead>  
                <TableBody>
                {
                values.discountHours.map((n, index)  => {
                    return <TableRow key={'h'+index} >
                        
                    <TableCell>{n.DiscountHours}</TableCell>
                    <TableCell>{n.DiscountValue}</TableCell>
                    <TableCell>{n.SeatCount}</TableCell>
                    </TableRow>
                    
                })
                }
                </TableBody>
                </Table>
                </TableContainer>
                <Typography component="h1" variant="h5">
                        {APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.RecommendedMenu}
                </Typography>
                <TableContainer>
                <Table stickyHeader  aria-label="sticky table">
                <TableHead>  

                    <TableRow>  

                   

                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.MenuItem}</TableCell>  
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.Price}</TableCell>
                </TableRow>  

                </TableHead>  
                <TableBody>
                {
                values.recommendedMenus.map((n, index)  => {
                    return <TableRow key={'r'+index} >
                      
                    <TableCell>{n.menuitem}</TableCell>
                    <TableCell>{n.price}</TableCell>
                    </TableRow>
                    
                })
                }
                </TableBody>
                </Table>
                </TableContainer>
                <Typography component="h1" variant="h5">
                {APP_CONSTANT.APP_CONSTANTS.OperatingHours.OperatingHours}
                </Typography>
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
                    return <TableRow key={'o'+index} >
                        
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
               
                


                <div style={{display: 'flex', flexDirection :'row', marginTop: '10px'}}>
                    <Button
                    onClick = {this.previous}
                    variant="contained"
                    color="primary"
                    style={{width: '20%', marginRight:'30px'}}
                    >
                    {APP_CONSTANT.APP_CONSTANTS.RestHappy.Previous}
                    </Button>

                    <Button
                    onClick = {this.props.onFormSubmit}
                    variant="contained"
                    color="primary"
                    style={{width: '20%'}}
                    >
                    Submit
                    </Button>
                   

                </div>
            </React.Fragment>
                
            
        )
    }
   
}
export default RestaurantConfirmation
