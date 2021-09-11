import React, { useState } from 'react';
import { post } from 'axios';

function CustomerAdd(props){
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const [values, setValues] = useState({ 
        username: "",
        birthday: "",
        gender: "",
        job: ""
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
       
    }

    const handleFileChange = (e) =>{
        setFile(e.target.files[0]);
        setFileName(e.target.value);
    }
    const handleValueChange = (e) =>{
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    return(
        <form onSubmit = {handleFormSubmit}>
            <h1>고객 추가</h1>
            프로필 이미지:<input type = "file" name ="file" file={file} value={fileName} 
            onChange={handleFileChange}/><br />
            이름: <input type = "text" name = "username" value={values.username} onChange={handleValueChange} /><br />
            생년월일: <input type ="text" name="birthday" value = {values.birthday} onChange={handleValueChange} /><br />
            성별: <input type = "text" name="gender" value={values.gender} onChange={handleValueChange}/><br />
            직업: <input type = "text" name="job" value={values.job} onChange={handleValueChange}/><br />
            <button type = "submit">추가하기</button>
        </form>
    );
}

export default CustomerAdd;