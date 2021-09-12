import React from 'react';
import { TableRow, TableCell  } from '@material-ui/core';
import CustomerDelete from './CustomerDelete';
import { DataGrid } from '@material-ui/data-grid';
function Customer(props) {
    console.log(props);
    return(
       
       <TableRow>
           <TableCell style={{textAlign:"center"}}><img src = {props.image} alt = "profile" style ={{width:'100px', height:'100px'}}/></TableCell>
           <TableCell style={{textAlign:"center"}}>{props.name}</TableCell>
           <TableCell style={{textAlign:"center"}}>{props.birthday}</TableCell>
           <TableCell style={{textAlign:"center"}}>{props.gender}</TableCell>
           <TableCell style={{textAlign:"center"}}>{props.job}</TableCell>
           <TableCell style={{textAlign:"center"}}><CustomerDelete id={props.id} refresh={props.refresh}/></TableCell>
       </TableRow>
    )
}

function CustomerProfile(props) {
    return(
        <>
           <img src = {props.image} alt="profile" />
            <h2>{props.name}({props.id})</h2>
        </>
    )
}

function CustomerInfo(props) {
    return(
        <>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </>
    )
}
export default Customer;