import './bootstrap';
//import '../css/app.css'
//import './index.css'

import ReactDOM from 'react-dom/client';        
import Home from './Page/Home';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('app')).render(     
   <BrowserRouter>
    <Home />  
    </BrowserRouter>      
);