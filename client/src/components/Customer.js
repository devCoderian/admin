import React from 'react';
import { TableRow, TableCell  } from '@material-ui/core';
import CustomerDelete from './CustomerDelete';
function Customer(props) {
    console.log(props);
    return(
       <TableRow>
           <TableCell>{props.id}</TableCell>
           <TableCell ><img src = {props.image} alt = "profile" style ={{width:'100px', height:'100px'}}/></TableCell>
           <TableCell>{props.name}</TableCell>
           <TableCell>{props.birthday}</TableCell>
           <TableCell>{props.gender}</TableCell>
           <TableCell>{props.job}</TableCell>
           <TableCell><CustomerDelete id={props.id} refresh={props.refresh}/></TableCell>
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