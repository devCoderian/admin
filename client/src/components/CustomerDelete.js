import React, { useState } from 'react';
import { Dialog, DialogContentText, TextField } from '@material-ui/core';
import { DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
function CustomerDelete(props) {
    
    const [modal, setModal] = useState(false);
    const handleClickOpen=()=>{
        setModal(true);
    }
    const handleClose=()=>{
        setModal(false);
    }
    const deleteCustomer = (id) => {
        const url = '/api/customer/' + id;
        console.log(url);
        fetch(url,{
            method: 'DELETE'
        });
        props.refresh();
    }

    return (
        <>
          <Button variant="contained" color="primary" 
            onClick = {handleClickOpen}>삭제</Button>
        <Dialog open = {modal} onClose={handleClose}> 
        <DialogTitle onClose={handleClose}>
            삭제 경고
        </DialogTitle> 
        <DialogContent>
            <Typography gutterBottom>
                선택한 고객 정보가 삭제됩니다.
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button variant ="contained" color="primary"
            onClick = {(e) =>{
                deleteCustomer(props.id);
            }}>
                삭제
            </Button>
            <Button variant ="outlined" color="primary"
            onClick = {(e) =>{
                handleClose();
            }}>
                닫기
            </Button>
        </DialogActions>
        </Dialog>
        </>
          
    )
}

export default CustomerDelete
