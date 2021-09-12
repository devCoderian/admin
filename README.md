# 고객 관리 시스템
본 프로젝트는 react와 mysql로 이루어진 고객 관리 시스템 포트폴리오 입니다. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To use this application

In the project directory, you can run:

<ol>
	<li>make a table in mysql</li> 

```
CREATE TABLE CUSTOMER (
	id INT PRIMARY KEY AUTO_INCREMENT,
	image VARCHAR(1024),
	name VARCHAR(64),
	birthday VARCHAR(64),
	gender VARCHAR(64),
	job VARCHAR(64),
    createdDate DATETIME DEFAULT NOW()
	)DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI
```


<li>make a database.json file in root folder</li>

put mysql info into database.json file.

```
{
    "host":"",
    "user":"",
    "password":"",
    "port":"",
    "database":""
}
```

<li>Type " npm install " inside the root directory ( Download Server Dependencies )</li>


<li>Type " npm install " inside the client directory ( Download Front-end Dependencies )</li>

</ol>


## View Web App
![image](https://user-images.githubusercontent.com/87194565/132987355-19645d2b-6bed-4af9-90ee-ea5a8a377322.png)
![image](https://user-images.githubusercontent.com/87194565/132987393-dc0f2235-a48c-4c4e-8278-afc53a63472d.png)
![image](https://user-images.githubusercontent.com/87194565/132987497-8b4a989f-3d94-4668-b5a5-5e2e801215e2.png)
![image](https://user-images.githubusercontent.com/87194565/132987417-8d26c541-b78a-4329-a304-1c0040f93add.png)
![image](https://user-images.githubusercontent.com/87194565/132987463-4be09566-4f15-4300-b3a4-1cf11ce3a7b6.png)

