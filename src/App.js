
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation />

      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails /> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <Footer/>
    </div>

// {/* <Router>
// <div>
//   <Routes>
//     <Route exact path="/" element={<HomePage />}/>
//     <Route exact path="/product" element={ <Product/>}/>
//   </Routes>
// </div>
// </Router> */}
  );
}

export default App;
