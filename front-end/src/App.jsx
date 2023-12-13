import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import About from "./pages/About";
import Header from "./components/Header";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return ( 
    
    <>
      
      <Router>
      <Header/>
        <Routes>
         
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sign-in" element = {<SignIn/>}></Route>
          <Route path="/sign-up" element = {<SignUp/>}></Route>
          <Route path="/about" element = {<About/>}></Route>
          <Route element = {<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}></Route>
          </Route> 
        </Routes>
      </Router>
    
    </>
    
   
   );
}

export default App;