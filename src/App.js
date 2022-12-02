import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ProductScreen from './Screens/ProductScreen';
import AdminLogin from './Screens/AdminLogin';
import Cart from './Screens/Cart';
import Checkout from './Screens/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='adminlogin' element={<AdminLogin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='products' element={<ProductScreen />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
