import Bestsellingpro from "./components/Bestproduct/Bestsellingpro";
import Home from "./components/Home/Home";
import Workdetails from "./components/Howworks/Workdetails";
import News from "./components/News/News";
import Parking from "./components/Parkingtags/ParkingTag";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Layout from "./components/Layout/Layout";
import Nopage from "./components/Nopage/Nopage";
import Contactus from "./components/Usercontact/Contactus";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import New from "./pages/New/New";
import Customers from "./pages/Customers/Customers";
import Single from "./pages/Single/Single";
import { customerInput } from "./formsource";
import DbHome from "./pages/Dashboard/DbHome";
import Edit from "./pages/Edit/Edit";
import Packages from "./pages/Pakages/Packages";
import Global from "./pages/Global/Global"
import Wallet from "./pages/Wallet/Wallet";
import Message from "./pages/Message/Message";
import Submail from "./pages/Submail/Submail";
import Profile from "./components/Profile/Profile";
import Login2 from "./components/Login2/Login2";
import Register2 from "./components/Login2/Register2";
import PhoneAuth from "./PhoneAuth";
import Contact from "./components/Contact/Contact";
import Walletmanagement from "./pages/Walletmanagement/Walletmanagement";
import Navmob from "./components/Navmob/Navmob";
import CreatePackgage from "./components/Createpackages/CreatePackage";
// import Upload from "./components/PackageUpload/Upload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Route index element={<DbHome />} />
            <Route path="/dashboard/packages">
              <Route index element={<Packages />} />
              <Route path=":packageId">
                <Route index element={<CreatePackgage />} />
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
                element={<New inputs={customerInput} title="Add New Customer" />}
              />
              <Route path="/dashboard/customers/messages" element={<Message />} />
              <Route path="/dashboard/customers/wallet" >
                <Route index element={<Wallet />} />
                <Route path="/dashboard/customers/wallet/add-wallet" element={<Walletmanagement />} />
              </Route>
              {/* <Route path="/dashboard/customers/packages" element={<Packages />} /> */}
              <Route path="/dashboard/customers/global" element={<Global />} />
              <Route path="/dashboard/customers/sub-mails" element={<Submail />} />
              <Route path="/dashboard/customers/profile" element={<Navmob />} />
              {/* <Route path="/dashboard/customers/auth" element={<Login2 />} /> */}
              {/* <Route path="/dashboard/customers/auth" element={<Register2 />} /> */}


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
            <Route path="/login" element={<Login2 />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="news" element={<News />} />
            <Route path="*" element={<Nopage />} />``
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

