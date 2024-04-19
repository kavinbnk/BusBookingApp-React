import React from "react";
import Home from './homepage.jsx';
import List from './buslist.jsx';
import Ticket from './ticket.jsx';
import Login from './login.jsx';
import Signin from './signin.jsx';
import { Route, Routes} from 'react-router-dom';

function MainApp() {



  return (
    <>

      <Routes>

        <Route path="/" element={<Login></Login>}/>

        <Route path="/signin" element={<Signin></Signin>} />

        <Route path="/home" element={<Home></Home>} />

        <Route path="/list" element={<List></List>} />

        <Route path="/ticket" element={<Ticket></Ticket>}/>

      </Routes>
      
    </>
  );
}

export default MainApp;
