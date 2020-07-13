import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Sanctions from './components/SactionsHome';
import About from './components/About';
import Contacts from './components/Contacts';

import AddSanction from './components/SubComponents/AddSanction';
import Audit from './components/SubComponents/Audit';
import Search from './components/SubComponents/Search';
import Authorize from './components/SubComponents/Authorize';
import BulkUpload from './components/SubComponents/BulkUpload';
import ViewSanctions from './components/SubComponents/ViewSanctions';
import UpdateSanctions from './components/SubComponents/UpdateSactions';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/SSL/Home' component={Search} />
        <Route path='/About' component={About} />
        <Route path='/Contacts' component={Contacts} />

        <Route path='/SSL/AddSanction' component={AddSanction} />
        <Route path='/SSL/Audit' component={Audit} />
        <Route path='/SSL/Search' component={Search} />


        <Route path='/SSL/Authorize' component={Authorize} />
        <Route path='/SSL/BulkUpload' component={BulkUpload} />
        <Route path='/SSL/ViewSanctions' component={ViewSanctions} />
        <Route path='/SSL/UpdateSanctions' component={UpdateSanctions} />
    </Layout>
);
