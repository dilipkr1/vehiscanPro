import Bestsellingpro from "./components/Bestproduct/Bestsellingpro";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Workdetails from "./components/Howworks/Workdetails";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Parking from "./components/Parkingtags/ParkingTag";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Nopage from "./components/Nopage/Nopage";
import Contactus from "./components/Usercontact/Contactus";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Navmob from "./components/Navmob/Navmob";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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

