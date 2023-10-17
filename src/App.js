import AddCard from "./appComp/AddCard";
import AddProduct from "./appComp/AddProduct";
import Cart from "./appComp/Cart";
import FailedPayment from "./appComp/FailedPayment";
import OrderConfirmed from "./appComp/OrderConfirmed";
import Payment from "./appComp/Payment";
import RateOrder from "./appComp/RateOrder";
import Waiting from "./appComp/Waiting";
import WaitingSuccess from "./appComp/WaitingSuccess";
import Home from "./appComp/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/app/home/add-product/:id" element={<AddProduct />} />
        <Route path="/app/home/cart" element={<Cart />} />
        <Route path="/app/home/payment-method" element={<Payment />} />
        <Route path="/app/home/payment-method/Add-card" element={<AddCard />} />
        <Route path="/app/home/order-Confirmed" element={<OrderConfirmed />} />
        <Route path="/app/home/payment-failed" element={<FailedPayment />} />
        <Route path="/app/home/rate-order" element={<RateOrder />} />
        <Route path="/waitList/:id" element={<Waiting />} />
        <Route path="/waitList/success/:id" element={<WaitingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
