import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Header from './Header';
import SactionHome from './SactionsHome';


export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
      <Header/>
        <NavMenu />

        {window.location.href.indexOf('SSL') > -1 ?
            <div className="row">
                <div className="col-sm-4"><SactionHome /></div>
                <div className="col-sm-8"><Container>
                    {props.children}
                </Container></div>
            </div>
            :
            <Container>
                {props.children}
            </Container>
            }
        
           
    </React.Fragment>
);
