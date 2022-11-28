import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='products' element={<ProductScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
