import Bestsellingpro from "./components/Bestproduct/Bestsellingpro";
import Home from "./components/Home/Home";
import Workdetails from "./components/Howworks/Workdetails";
import News from "./components/News/News";
import Parking from "./components/Parkingtags/ParkingTag";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Layout from "./components/Layout/Layout";
import Nopage from "./components/Nopage/Nopage";
import Signup from "./components/Signup/Signup";
import New from "./pages/New/New";
import Customers from "./pages/Customers/Customers";
import Single from "./pages/Single/Single";
import DbHome from "./pages/Dashboard/DbHome";
import Edit from "./pages/Edit/Edit";
import Packages from "./pages/Pakages/Packages";
import Global from "./pages/Global/Global"
import Wallet from "./pages/Wallet/Wallet";
import Message from "./pages/Message/Message";
import Submail from "./pages/Submail/Submail";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Walletmanagement from "./pages/Walletmanagement/Walletmanagement";
import CreatePackgage from "./components/Createpackages/CreatePackage";
import Packageupdate from "./components/Packageupdate/Packageupdate";
import Checkout from "./components/Checkout/Checkout";
import Singleproduct from "./components/Singleproduct/SingleProduct";
import Order from "./pages/Orders/Order";
import OrderPlaced from "./components/Shop/OrderPlaced";
import SinglerRow from "./pages/Orders/SinglerRow";
import Messages from "./components/Message/Messages";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import CusOrders from "./components/Custorder/CusOrders";
import CusProfile from "./components/Custopro/CusProfile";


function App() {
  return (

    <div className="App" >
      <BrowserRouter>
        <Routes  >
          <Route path="/dashboard"  >
            <Route index element={<DbHome />} />
            <Route path="/dashboard/orders" element={< Order />} />
            <Route path="/dashboard/single-row" element={< SinglerRow />} />
            <Route path="/dashboard/packages">
              <Route index element={<Packages />} />
              <Route path=":packageId">
                <Route index element={<CreatePackgage />} />
                <Route path="update-package" element={<Packageupdate />} />
              </Route>
            </Route>

            <Route path="/dashboard/customers">
              <Route index element={<Customers />} />
              <Route path=":customerid">
                <Route index element={<Single />} />
                <Route path="edit" element={<Edit />} />
              </Route>
              <Route
                path="/dashboard/customers/new"
                element={<New />}
              />
              <Route path="/dashboard/customers/messages" element={<Message />} />
              <Route path="/dashboard/customers/wallet" >
                <Route index element={<Wallet />} />
                <Route path="/dashboard/customers/wallet/add-wallet" element={<Walletmanagement />} />
              </Route>
              <Route path="/dashboard/customers/global" element={<Global />} />
              <Route path="/dashboard/customers/sub-mails" element={<Submail />} />
            </Route>
          </Route>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Home />
                  <Workdetails />
                  <Parking />
                  <Bestsellingpro />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/message">
              <Route index element={<Messages />} />
              <Route path="/message/success" element={<OrderPlaced title="Successfully Your Message has been Sent " paragraph="know more" bgColor="" />} />

            </Route>
            <Route path="shop">
              <Route index element={<Shop />} />
              <Route path="/shop/order-placed" element={<OrderPlaced title="Successfully Your Order has been placed" paragraph="see orders" />} />

              <Route path=":productId">
                <Route index element={<Shop />} />
                <Route path="product" index element={<Singleproduct />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>
            </Route>
            <Route path="/profile"  >
              <Route index element={<CusProfile />} />
              <Route path="/profile/orders" element={< CusOrders />} />
              <Route path="/profile/updated" element={<OrderPlaced title="Successfully Updated" paragraph="see now " />} />

            </Route>

            <Route path="contact" element={<Contact />} />
            <Route path="news" element={<News />} />
            <Route path="*" element={<Nopage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

