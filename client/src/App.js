import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { useEffect, useState, useRef, useInterval } from 'react';
import { CircularProgress } from '@material-ui/core';
import CustomerAdd from './components/CustomerAdd';
import CustomerDelete from './components/CustomerDelete';
import Header from './components/Header';
const styles = theme => ({
  root:{
    width:'100%',
    marginTop: '50px',
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  },
  menu:{
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  }
})

function App(props) {
  const {classes} = props; 

  const [customers, setCustomers] = useState([]);


  const refresh = () =>{
    setCustomers([]);
    callApi().then(res => setCustomers(res))
    .catch(err => console.log(err));
  }
  const callApi = async () =>{
    const res = await fetch('/api/customer',{
      headers:{
        'Accept':'application /json'
      }
    });
    const body = await res.json();
    return body;
  }

  useEffect(()=>{
  
    console.log('실행', customers);
    callApi().then(res => setCustomers(res))
    .catch(err => console.log(err));
  },[]);

  const cellList = ["번호", "프로필 이미지", "이름" , "생년월일", "성별", "직업", "설정"]
  return(
  // 메인 자바스크립트 관리
  <div>
    <Header refresh = {refresh} />
    <Paper className={classes.root}>
     <Table className={classes.table}>
       <TableHead>
         <TableRow>
             {cellList.map(c =>{
               return <TableCell>{c}</TableCell>
             })}
         </TableRow>
       </TableHead>
        <TableBody>
        
        {customers.map((customer)=>{
            return(
              <Customer
                  key ={customer.id}
                  id = {customer.id}
                  image = {customer.image}
                  name = {customer.name}
                  birthday = {customer.birthday}
                  gender = {customer.gender}
                  job= {customer.job}
                  refresh = {refresh}
              />
            )
        })
      }
    
      </TableBody>
      </Table>
    </Paper>
    </div>
  
  )};
export default withStyles(styles)(App);

// const customers =[{
//   'id': 1,
//   'image': 'http://placeimg.com/64/64/any',
//   'name': '유저1',
//   'birth':'960719',
//   'gender':'여',
//   'job':'무직'
// },
// {
//   'id': 2,
//   'image': 'http://placeimg.com/64/64/any',
//   'name': '유저2',
//   'birth':'960719',
//   'gender':'여',
//   'job':'무직'
// },
// {
//   'id': 3,
//   'image': 'http://placeimg.com/64/64/any',
//   'name': '유저3',
//   'birth':'960719',
//   'gender':'여',
//   'job':'무직'
// }];
//-> server.js 로 이동 