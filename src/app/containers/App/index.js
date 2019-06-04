import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './styles/app.scss';

import Header from '../Header';
import Welcome from '../../pages/Welcome';
import Start from '../../pages/Start';
import Test from '../../pages/Test';
import Authorization from '../../pages/Authorization';

import ROUTE_CONFIG from '../../util/config/router.config';


const PrivateRoute = ({component: Component, token, ...rest}) => (
    <Route {...rest} render={(props) => (
        (token) ?
            (<div className='appWrapper'>
                <Header/>
                <div className='component'>
                    <Component {...props} />
                </div>
            </div>)
            : <Redirect to={{pathname: ROUTE_CONFIG.welcome.path, state: {from: props.location}}}/>)
    } />

);

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {token = 'testToken'} = this.props;
        const {test, welcome, start, authorization} = ROUTE_CONFIG;

        return (
            <Router>
                <Switch>
                    <PrivateRoute exact path={test.path} component={Test} token={token}/>
                    <PrivateRoute exact path={start.path} component={Start} token={token}/>
                    <Route path={authorization.path} component={Authorization}/>
                    <Route path={welcome.path} component={Welcome}/>
                    <Route path={''} component={Welcome}/>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = ({ authorization }) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);