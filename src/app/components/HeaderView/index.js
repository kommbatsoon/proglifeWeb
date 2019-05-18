import React from 'react';
import style from './styles.scss';

import {withRouter} from 'react-router-dom';

import ROUTE_CONFIG from '../../core/util/helpers/routeConfig';

class HeaderView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    navigateTo = (path) => {
        this.props.history.push(path);
    };

    render() {
        const {home, test} = ROUTE_CONFIG;
        const {activeRoute} = this.props;

        const getItemClass = (tab) => style.item + ' ' + (activeRoute === tab ? style.item_active : '');

        return (
            <div className={style.wrapper}>
                <ul className={style.navigationBar}>
                    <li className={getItemClass('')} onClick={() => this.navigateTo(home.path)}>
                        {home.name}
                    </li>
                    <li className={getItemClass(test.name)} onClick={() => this.navigateTo(test.path)}>
                        {test.name}
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(HeaderView);