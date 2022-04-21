import React from "react";
import { Outlet, Link } from "react-router-dom";
import {Box,Container} from '@mui/material/';
import Appbar from "../components/Appbar.js";
import Home from '../pages/Home.js';



const Layout = () => {
  return (
    <>
    
    <Container maxWidth="sm">
    <Appbar />
     <Home />
    </Container>

     {/* <Box textAlign='center'>
     <nav>
        <ul className="listDot">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
     </Box> */}

      
    </>
  );
};

export default Layout;
