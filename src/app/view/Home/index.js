import React from 'react';
import {connect} from 'react-redux';
import style from './styles.scss';

import Home from '../../containers/Home';
import {setActiveRoute} from '../../core/actions/application';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const {setActiveRoute} = this.props;
        setActiveRoute('');
    }

    render() {
        // const {} = this.state;

        return (
            <div className={style.wrapper}>
                <Home/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    setActiveRoute: (data) => {
        dispatch(setActiveRoute(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
