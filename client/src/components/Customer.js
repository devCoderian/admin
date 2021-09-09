import React from 'react';
import { TableRow, TableCell  } from '@material-ui/core';
function Customer(props) {
    return(
        // <div>      
        // <CustomerProfile
        // image = {props.image}
        // name = {props.name}
        // id = {props.id}
        // />

        // <CustomerInfo
        //     birth = {props.birth}
        //     gender = {props.gender}
        //     job= {props.job}
        // />
        // </div>
       <TableRow>
           <TableCell>{props.id}</TableCell>
           <TableCell><img src = {props.image} alt = "profile"/></TableCell>
           <TableCell>{props.name}</TableCell>
           <TableCell>{props.birth}</TableCell>
           <TableCell>{props.gender}</TableCell>
           <TableCell>{props.job}</TableCell>
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
            <p>{props.birth}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </>
    )
}
export default Customer;