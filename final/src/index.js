import react from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom'
import "swiper/css/bundle";


ReactDOM.render( 
    <Router>
       <App/> 
    </Router> ,document.getElementById('root'));
