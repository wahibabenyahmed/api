
import './App.css';
import axios from 'axios'
import Userlist from './component/Userlist';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendData } from './toolkit/userSlice';
import { Route, Routes } from 'react-router-dom';
import Container from './component/container';
import Profile from './component/Profile';
function App() {
  const resultat = useSelector((state)=>state.user.list)
  const dispatch=useDispatch()
  useEffect(()=>{
const getData=()=>{
  axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
dispatch(sendData (response.data))
   
  }).catch((err)=>{
console.log(err);
  })
} 
getData()
  },[])
  console.log(resultat);
  return (

    <div className="App">
     
      <header className="App-header">
        <Routes>
       <Route path='/'element={<Container resultat={resultat}/> }/>
<Route path='/profile/:id' element={<Profile/>}/>
        </Routes>
       
      </header>
    </div>
  );
}

export default App;
