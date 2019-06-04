import React from 'react';
import {connect} from 'react-redux';
import style from './styles.scss';

import {setActiveRoute} from '../../core/actions/application';
import ROUTE_CONFIG from '../../util/config/router.config';

import Start from '../../containers/Start';

class TestView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {setActiveRoute} = this.props;
        setActiveRoute(ROUTE_CONFIG.start.name);
    }

    render() {

        return (
            <div className={style.wrapper}>
                <Start/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TestView);
