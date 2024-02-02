import Bestsellingpro from "./components/Bestproduct/Bestsellingpro";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Workdetails from "./components/Howworks/Workdetails";
import Navbar from "./components/Navbar/Navbar";
import Parking from "./components/Parkingtags/Parking";
  
// import "./app.css"

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Home/>
      <Workdetails/>
      <Parking/>
      <Bestsellingpro/>
      <Footer/>
    
    </div>
  );
}

export default App;
