
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {


  return (
    <>
      <div>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        <ToastContainer/>
      </div>
    </>
  )
}

export default App
