import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/routes/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/routes/About';
import Service from './Components/routes/Service';
import Contact from './Components/routes/Contact';
import Footer from './Components/Footer';
import Signup from './Components/Signup';

function App() {
  // const routes = useRoutes({
  //   // Define your routes here
  // });
  return (
    <div className="App">
      <Navbar/>    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>

      {/* <Signup/>    */}   

    
      <Footer/>                   
     


    

       
    
    


    </div>
  ) ;
}  

export default App;
