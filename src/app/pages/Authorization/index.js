import React from 'react';
import {connect} from 'react-redux';
import style from './styles.scss';
import ROUTE_CONFIG from '../../util/config/router.config';

const INPUT_TYPES = {
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email'
};
const AUTH_ACTION = {
    LOGIN: 'Login',
    REGISTRATION: 'Registration'
};

const BUTTON_TYPES = {
    primary: 'primary',
    secondary: 'secondary'
};

const initialState = {
    login: '',
    password: '',
    repeatPassword: ''
};

class AuthorizationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            login: '',
            password: '',
            repeatPassword: ''
        };
    }

    onValueChange = (key, value) => {
        this.setState({[key]: value});
    };

    onActionClick = (type) => {
        const {login, password, repeatPassword} = this.state;
        const credentials = {login, password, repeatPassword};

        console.log(type);
        console.log(credentials);

        this.setState({...initialState});

        if (type === AUTH_ACTION.LOGIN) {
            this.props.history.push(ROUTE_CONFIG.start.path);
        }
    };

    render() {

        const containerClass = style.container + ' ' + (this.state.active ? style.rightPanelActive : '');

        return (
            <div className={style.wrapper}>
                <div className={containerClass}>
                    <div className={style.formContainer + ' ' + style.signUpContainer}>
                        <div className={style.title}>
                            Create Account
                        </div>
                        <span>or use your email for registration</span>
                        <AuthInputControl
                            type={INPUT_TYPES.TEXT}
                            placeholder={'Login'}
                            onChange={value => this.onValueChange('login', value)}
                        />
                        <AuthInputControl
                            type={INPUT_TYPES.PASSWORD}
                            placeholder={'Password'}
                            onChange={value => this.onValueChange('password', value)}
                        />
                        <AuthInputControl
                            type={INPUT_TYPES.PASSWORD}
                            placeholder={'Repeat password'}
                            onChange={value => this.onValueChange('repeatPassword', value)}
                        />
                        <AuthButtonControl
                            text={'Sign Up'}
                            onClick={() => this.onActionClick(AUTH_ACTION.REGISTRATION)}
                        />
                    </div>
                    <div className={style.formContainer + ' ' + style.signInContainer}>
                        <div className={style.title}>
                            Sign in
                        </div>
                        <span>or use your account</span>
                        <AuthInputControl
                            type={INPUT_TYPES.TEXT}
                            placeholder={'Login'}
                            onChange={value => this.onValueChange('login', value)}
                        />
                        <AuthInputControl
                            type={INPUT_TYPES.PASSWORD}
                            placeholder={'Password'}
                            onChange={value => this.onValueChange('password', value)}
                        />
                        <AuthButtonControl
                            text={'Sign In'}
                            onClick={() => this.onActionClick(AUTH_ACTION.LOGIN)}
                        />
                    </div>
                    <div className={style.overlayContainer}>
                        <div className={style.overlay}>
                            <div className={style.overlayPanel + ' ' + style.overlayLeft}>
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <AuthButtonControl
                                    type={BUTTON_TYPES.secondary}
                                    text={'Sign In'}
                                    onClick={() => this.setState({active: false})}
                                />
                            </div>
                            <div className={style.overlayPanel + ' ' + style.overlayRight}>
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <AuthButtonControl
                                    type={BUTTON_TYPES.secondary}
                                    text={'Sign Up'}
                                    onClick={() => this.setState({active: true})}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);

const AuthInputControl = ({type, placeholder = '', customClass = '', onChange, maxLength}) => {
    return (
        <input
            autoComplete={type}
            type={type || 'text'}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            maxLength={maxLength || 100}
            className={style.authInput + ' ' + customClass}
        />
    );
};

const AuthButtonControl = ({type = BUTTON_TYPES.primary, text = '', customClass = '', onClick}) => {
    const defaultClassName = type === BUTTON_TYPES.primary ? style.primaryButton : style.secondaryButton;

    return (
        <button className={defaultClassName + ' ' + customClass} onClick={onClick}>
            {text}
        </button>
    );
};
