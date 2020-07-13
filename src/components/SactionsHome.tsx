import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import '../custom.css';


export default (props: { children?: React.ReactNode }) => (

            <React.Fragment>
                <div className="vertical-menu">
                    <a href="/SSL/Search" >Search</a>
            <a href="/SSL/AddSanction">Add New</a>
            <a href="/SSL/Authorize">Authorize</a>
            <a href="/SSL/Audit">Audit</a>
            <a href="/SSL/BulkUpload">Bulk Upload</a>
                </div>              
            </React.Fragment>
        );



