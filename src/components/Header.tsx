import React, { Component } from 'react';
import './NavMenu.css';
import UBSLOGO from '../images/UBS_Logo_Semibold.svg';

const Header = (props:any) => (
    <div>
       

        <div className="row">
            <div className="col-sm-4"> <img style={{ 'height': '50px' }} className="d-sm-inline-flex flex-sm-row" src={UBSLOGO} alt="UBS Logo" /></div>
            <div className="col-sm-8">
                Login User : { props.User}

         </div>
        </div>

   </div>
);

export default Header;
