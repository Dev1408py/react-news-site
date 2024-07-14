// import logo from './logo.svg';
import './App.css';
import News from './mycomponents/News';
import Navbar from './mycomponents/Navbar';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// ************************************************************************************************
// to add a badge on the cards/to be done --Video No. --> 32
// ************************************************************************************************


function App() {                                                                      
  return (
    <Router>

    <Navbar/>
         <Route exact strict path="/">
            <News country="in" category="general"/>
        </Route>
        <Route exact strict path="/sports">
            <News country="in" category="sports"/>
        </Route>
        <Route exact strict path="/business">
            <News country="in" category="business"/>
        </Route>
        <Route exact strict path="/entertainment">
            <News country="in" category="entertainment"/>
        </Route>
        <Route exact strict path="/health">
            <News country="in" category="health"/>
        </Route>
        <Route exact strict path="/technology">
            <News country="in" category="technology"/>
        </Route>
        <Route exact strict path="/general">
            <News country="in" category="general"/>
        </Route>
        <Route exact strict path="/science">
            <News country="in" category="science"/>
        </Route>
     
    </Router>
  );
}

export default App;