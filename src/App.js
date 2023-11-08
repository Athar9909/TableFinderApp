import { Suspense, lazy } from "react";
import AddCard from "./appComp/AddCard";
import RateOrder from "./appComp/RateOrder";
import Review from "./appComp/Review";
import Waiting from "./appComp/Waiting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./appComp/Loader";
const Home = lazy(() => import("../src/appComp/home"));
const AddProduct = lazy(() => import("../src/appComp/AddProduct"));
const Cart = lazy(() => import("../src/appComp/Cart"));
const Payment = lazy(() => import("../src/appComp/Payment"));
const OrderConfirmed = lazy(() => import("../src/appComp/OrderConfirmed"));
const WaitingSuccess = lazy(() => import("../src/appComp/WaitingSuccess"));
const FailedPayment = lazy(() => import("../src/appComp/FailedPayment"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/:id" element={<Home />} />

          <Route path="/app/home/add-product/:id" element={<AddProduct />} />
          <Route path="/app/home/cart" element={<Cart />} />
          <Route path="/app/home/payment-method" element={<Payment />} />
          <Route
            path="/app/home/payment-method/Add-card"
            element={<AddCard />}
          />
          <Route
            path="/app/home/order-Confirmed"
            element={<OrderConfirmed />}
          />
          <Route path="/app/home/payment-failed" element={<FailedPayment />} />
          <Route path="/app/home/rate-order" element={<RateOrder />} />
          <Route path="/app/home/review" element={<Review />} />
          <Route path="/waitList/:id" element={<Waiting />} />
          <Route path="/waitList/success/:id" element={<WaitingSuccess />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
