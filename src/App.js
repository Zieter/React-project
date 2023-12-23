import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import AdnminProducts from './pages/admin/AdminProducts';
import AdnminCoupons from './pages/admin/AdminCoupons';
import AdnminOrders from './pages/admin/AdminOrders';
import FrontLayout from './pages/front/FrontLayout';
import Home from './pages/front/Home';
import Products from './pages/front/Products';
import ProductDetail from './pages/front/ProductDetail';
import Cart from './pages/front/Cart';
import Checkout from './pages/front/Checkout';
import Success from './pages/front/Success';
import './css/app.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontLayout/>}>
          <Route path="" element={<Home/>}></Route>
          <Route path="products" element={<Products/>}></Route>
          <Route path="product/:id" element={<ProductDetail/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
          <Route path="checkout" element={<Checkout/>}></Route>
          <Route path="success/:orderId" element={<Success/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<Dashboard/>}>
          <Route path="products" element={<AdnminProducts/>}></Route>
          <Route path="coupons" element={<AdnminCoupons/>}></Route>
          <Route path="orders" element={<AdnminOrders/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
