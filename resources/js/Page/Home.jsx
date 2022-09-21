import  Navbar  from './Pages/Navbar';
import  Main  from './Pages/Main';
import  Contact  from './Pages/Contact';
import  Services  from './Pages/Service';
import  About  from './Pages/About';
import  Error  from './pages/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import   './Pages/index.css';
import {

    Routes,
    Route
  } from "react-router-dom";
const Home=()=>{
return(
    <>
 
     <Routes>
    <Route path="/" element={<Navbar />}>
    <Route index element={<Main/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Service' element={<Services/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='*' element={<Error/>}/>
     
      
      </Route>
      
   
   
  </Routes>
 
   
    </>
)
}
export default Home;