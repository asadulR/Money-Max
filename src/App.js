
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import Signup from './Components/Login/Signup/Signup';
import Blog from './Components/Blog/Blog/Blog';
import Job from './Components/Job/Job/Job';
import Card from './Components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cards' element={<Card/>}></Route>
        <Route path="/job" element={<Job/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
