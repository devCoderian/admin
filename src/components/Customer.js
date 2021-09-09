import React from 'react';

function Customer(props) {
    return(
        <div>      
        <CustomerProfile
        image = {props.image}
        name = {props.name}
        id = {props.id}
        />

        <CustomerInfo
            birth = {props.birth}
            gender = {props.gender}
            job= {props.job}
        />
        </div>
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