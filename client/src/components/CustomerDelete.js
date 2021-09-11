import React from 'react'

function CustomerDelete(props) {
    
    const deleteCustomer = (id) => {
        const url = '/api/customer/' + id;
        console.log(url);
        fetch(url,{
            method: 'DELETE'
        });
        props.refresh();
    }

    return (
        <div>
          <button onClick = {(e) =>{
            deleteCustomer(props.id)
          }}>삭제</button>  
        </div>
    )
}

export default CustomerDelete
