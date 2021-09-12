import React, { useState } from 'react';
import { post } from 'axios';
import { Dialog, DialogContentText, TextField } from '@material-ui/core';
import { DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme =>({
    hidden:{
        display: 'none',
    }
})

function CustomerAdd(props){
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [modal, setModal] = useState('');
    const [values, setValues] = useState({ 
        username: "",
        birthday: "",
        gender: "",
        job: "",
    });
    const addCustomer = () =>{
        const url ='./api/customer';
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', values.username);
        formData.append('birthday', values.birthday);
        formData.append('gender', values.gender);
        formData.append('job', values.job);

        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        addCustomer().then((res)=>{
            console.log(res.data);
            props.refresh();
        });
        setValues({});
        setModal(false);
       
    }

    const handleFileChange = (e) =>{
        setFile(e.target.files[0]);
        setFileName(e.target.value);
    }
    const handleValueChange = (e) =>{
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleClickOpen=()=>{
        setModal(true);
    }
    const handleClose=()=>{
        setModal(false);
    }
    const { classes } = props;
    return(
    <>
        <div>
            <Button variant = "contained" color="default" onClick = {handleClickOpen}>
            고객 추가하기
            </Button>
        </div>
        <Dialog open={modal} onClose={handleClose}>
            <DialogTitle>고객추가</DialogTitle>
            <DialogContent>
            <input className={classes.hidden} id = "raised-button-file" accept="image/*" type = "file" file={file} value={fileName} 
            onChange={handleFileChange}/><br />
            <label htmlFor ="raised-button-file">
                <Button variant = "contained" color = "primary" component ="span" name="file">
                {fileName === "" ? "프로필 이미지 선택" : fileName}
                </Button>
            </label>
            <br />
            <TextField label = "이름" type = "text" name = "username" value={values.username} onChange={handleValueChange} /><br />
            <TextField label = "생년월일" type ="text" name="birthday" value = {values.birthday} onChange={handleValueChange} /><br />
            <TextField label = "성별" type = "text" name="gender" value={values.gender} onChange={handleValueChange}/><br />
            <TextField label = "직업" type = "text" name="job" value={values.job} onChange={handleValueChange}/><br />
            </DialogContent>
            <DialogActions>
        <Button variant = "contained" color = "primary" onClick={handleFormSubmit}>추가</Button>
        <Button variant = "outlined" color = "primary" onClick={handleClose}>닫기</Button>
        </DialogActions>
        </Dialog>
      
        {/* <form onSubmit = {handleFormSubmit}>
            <h1>고객 추가</h1>
            프로필 이미지:<input type = "file" name ="file" file={file} value={fileName} 
            onChange={handleFileChange}/><br />
            이름: <input type = "text" name = "username" value={values.username} onChange={handleValueChange} /><br />
            생년월일: <input type ="text" name="birthday" value = {values.birthday} onChange={handleValueChange} /><br />
            성별: <input type = "text" name="gender" value={values.gender} onChange={handleValueChange}/><br />
            직업: <input type = "text" name="job" value={values.job} onChange={handleValueChange}/><br />
            <button type = "submit">추가하기</button>
        </form> */}
    </>
    );
}

export default withStyles(styles)(CustomerAdd);