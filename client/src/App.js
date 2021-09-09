import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { useEffect, useLayoutEffect, useState } from 'react';
const styles = theme => ({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

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

function App(props) {
  const {classes} = props; 

  const [customers, setCustomers] = useState([]);

  const callApi = async () =>{
    const res = await fetch('/api/customers',{
      headers:{
        'Accept':'application /json'
      }
    });
    const body = await res.json();
    return body;
  }
  useEffect(()=>{
    console.log('실행');
    callApi().then(res => setCustomers(res));
  },[]);

  return(
  // 메인 자바스크립트 관리
    <Paper className={classes.root}>
     <Table className={classes.table}>
       <TableHead>
         <TableRow>
           <TableCell>번호</TableCell>
           <TableCell>이미지</TableCell>
           <TableCell>이름</TableCell>
           <TableCell>생년월일</TableCell>
           <TableCell>성별</TableCell>
           <TableCell>직업</TableCell>
         </TableRow>
       </TableHead>
        <TableBody>
        
        {customers?customers.map((customer)=>{
            return(
              <Customer
                  key ={customer.id}
                  id = {customer.id}
                  image = {customer.image}
                  name = {customer.name}
                  birth = {customer.birth}
                  gender = {customer.gender}
                  job= {customer.job}
              />
            )
        }):""
      }
      </TableBody>
      </Table>
    </Paper>
  
  )};
export default withStyles(styles)(App);
