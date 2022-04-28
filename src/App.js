
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import Signup from './Components/Login/Signup/Signup';
// import Blog from './Components/Blog/Blog/Blog';
import Job from './Components/Job/Job/Job';
import Card from './Components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Shared/Footer/Footer';
import LoanApply from './Components/LoanApply/LoanApply';
import RequireAuth from './Components/Auth/RequireAuth';
import Page404 from './Components/Page404/Page404';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cards' element={<Card />}></Route>
        <Route path='/loan' element={
          <RequireAuth>
            <LoanApply />
          </RequireAuth>
        }></Route>
        <Route path="/job" element={
          <RequireAuth>
            <Job />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
