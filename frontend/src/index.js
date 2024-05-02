import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import reportWebVitals from "./reportWebVitals";
import Homescreen from "./screens/homescreen";
import Productscreen from "./screens/productscreen";
import CartScreen from "./screens/cartscreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import Registerscreen from "./screens/registerscreen.jsx";
import ShippingScreen from "./screens/shippingScreen.jsx";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import Placeorderscreen from "./screens/placeorderscreen.jsx";
import ProfileScreen from "./screens/profilescreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import OrderListScreen from "./screens/admin/OrderListScreen.jsx";
import UserListScreen from "./screens/admin/UserListScreen.jsx";
import UserEditScreen from "./screens/admin/UserEditScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Homescreen />} />
      <Route path="/product/:id" element={<Productscreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<Registerscreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<Placeorderscreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderList" element={<OrderListScreen />} />
        <Route path="/admin/userList" element={<UserListScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
