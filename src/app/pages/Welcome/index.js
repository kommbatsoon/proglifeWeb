import React from 'react';
import {connect} from 'react-redux';
import style from './styles.scss';

import Button from '@material-ui/core/Button';
import ROUTE_CONFIG from '../../util/config/router.config';

const WELCOME_TEXT = 'Welcome to our App!';
const START_BUTTON_TEXT = 'Get started';
const COPYRIGHT_TEXT = 'Copyright © 2019 Example Inc. All rights reserved';

class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    onStartClick = () => {
        this.props.history.push(ROUTE_CONFIG.authorization.path);
    };

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.welcomeText}>{WELCOME_TEXT}</div>
                <Button
                    className={style.startButton}
                    onClick={this.onStartClick}
                    variant='contained'
                >
                    {START_BUTTON_TEXT}
                </Button>
                <div className={style.copyrightText}>{COPYRIGHT_TEXT}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
