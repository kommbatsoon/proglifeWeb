import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './styles.scss';

import LanguageSelect from '../ui/LanguageSelect';

import ROUTE_CONFIG from '../../util/config/router.config';

class HeaderView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    navigateTo = (path) => {
        this.props.history.push(path);
    };

    render() {
        const {start, test} = ROUTE_CONFIG;
        const {activeRoute, activeLanguage, setActiveLanguage} = this.props;

        const getItemClass = (tab) => style.item + ' ' + (activeRoute === tab ? style.item_active : '');

        return (
            <div className={style.wrapper}>
                <ul className={style.navigationBar}>
                    <li className={getItemClass(start.name)} onClick={() => this.navigateTo(start.path)}>
                        {start.name}
                    </li>
                    <li className={getItemClass(test.name)} onClick={() => this.navigateTo(test.path)}>
                        {test.name}
                    </li>
                </ul>
                <div>
                    <LanguageSelect active={activeLanguage} onSelect={setActiveLanguage}/>
                </div>
            </div>
        );
    }
}

export default withRouter(HeaderView);