import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './styles/app.scss';

import Header from '../Header';
import Home from '../../view/Home';
import Test from '../../view/Test';

import ROUTE_CONFIG from '../../core/util/helpers/routeConfig';


const PrivateRoute = ({component: Component, token, ...rest}) => (
    <Route {...rest} render={(props) => (
        (!token) ?
            (<div className='appWrapper'>
                <Header/>
                <div className='component'>
                    <Component {...props} />
                </div>
            </div>)
            : <Redirect to={{pathname: ROUTE_CONFIG.home.path, state: {from: props.location}}}/>)
    } />

);

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {token} = this.props;
        const {test, home} = ROUTE_CONFIG;

        return (
            <Router>
                <Switch>
                    {/*<PrivateRoute exact path={'/'} component={MainPage} token={token}/>*/}
                    {/*<PrivateRoute exact path={INDEX_TAB.path} component={MainPage} token={token}/>*/}
                    {/*<Route path={LOGIN_TAB.path} component={MainPage}/>*/}
                    <PrivateRoute exact path={home.path} component={Home} token={token}/>
                    <PrivateRoute exact path={test.path} component={Test} token={token}/>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = ({ authorization }) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);