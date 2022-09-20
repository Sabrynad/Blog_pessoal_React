import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import Home from './Page/Home/Home';
import Historia from './Page/historia/Historia';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path='/teste' element={<Navbar/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/historia' element={<Historia/>}></Route>
    </Routes>
 </Router>
  )
}


