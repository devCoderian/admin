import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers =[{
  'id': 1,
  'image': 'http://placeimg.com/64/64/any',
  'name': '유저1',
  'birth':'960719',
  'gender':'여',
  'job':'무직'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/any',
  'name': '유저2',
  'birth':'960719',
  'gender':'여',
  'job':'무직'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/any',
  'name': '유저3',
  'birth':'960719',
  'gender':'여',
  'job':'무직'
}];

function App() {
  return(
  // 메인 자바스크립트 관리
    <>
        {
        customers.map((customer)=>{
          return(
            <Customer
                id = {customer.id}
                image = {customer.image}
                name = {customer.name}
                birth = {customer.birth}
                gender = {customer.gender}
                job= {customer.job}
          />
          )
        })
      }
    </>
  
  )};
export default App;
