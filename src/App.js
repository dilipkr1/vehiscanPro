import Bestsellingpro from "./components/Bestproduct/Bestsellingpro";
import Home from "./components/Home/Home";
import Workdetails from "./components/Howworks/Workdetails";
import News from "./components/News/News";
import Parking from "./components/Parkingtags/ParkingTag";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Route index element={<DbHome />} />
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
              <Route path="/dashboard/customers/messages" element={<Nopage />} />
              <Route path="/dashboard/customers/wallet" element={<Nopage />} />
              <Route path="/dashboard/customers/sub-mails" element={<Nopage />} />
              <Route path="/dashboard/customers/packages" element={<Nopage />} />
              <Route path="/dashboard/customers/ss" element={<Nopage />} />

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
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contactus />} />
            <Route path="news" element={<News />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

