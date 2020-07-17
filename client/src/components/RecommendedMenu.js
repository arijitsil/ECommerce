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

export class RecommendedMenu extends Component {

    
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
       
        return (
            <React.Fragment>
                <div style={{display:'flex', flexDirection:'column', marginTop: '10px'}}>
                
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label ={APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.MenuItem}
                    name ='menuitem'
                    value = {values.menuitem}
                    required
                    onChange = {this.props.onChangeMenuItem}
                    />
               
               
                    
                    <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    style = {{ width: '15%'}}
                    label ={APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.Price}
                    name ='price'
                    value = {values.price}
                    required
                    onChange = {this.props.onChangePrice}
                    />
                   
                <Button
                onClick = {this.props.addMenu}
                variant="contained"
                color="primary"
                style={{width: '10%'}}
                >
               {APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.AddMenu}
                </Button>
                <TableContainer>
                <Table stickyHeader  aria-label="sticky table">
                <TableHead>  

                    <TableRow>  

                    <TableCell>{APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.Actions}</TableCell>  

                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.MenuItem}</TableCell>  
                    <TableCell align="left">{APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.Price}</TableCell>
                </TableRow>  

                </TableHead>  
                <TableBody>
                {
                values.recommendedMenus.map((n, index)  => {
                    return <TableRow key={index} >
                        <TableCell component="th" scope="row" onClick={(event) => this.props.deleteMenu(event,n.menuitem)}>
                            {deleteIcon}
                        </TableCell>
                        <TableCell>{n.menuitem}</TableCell>
                    <TableCell>{n.price}</TableCell>
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
                    {APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.Previous}
                    </Button>

                    <Button
                    onClick = {this.continue}
                    variant="contained"
                    color="primary"
                    style={{width: '20%'}}
                    >
                    {APP_CONSTANT.APP_CONSTANTS.RecommendedMenu.Next}
                    </Button>
                   

                </div>
            </React.Fragment>
                
            
        )
    }
   
}
export default RecommendedMenu
