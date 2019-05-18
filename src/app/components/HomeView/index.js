import React from 'react';
import style from './styles.scss';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {usersData} = this.props;

        console.log(usersData);

        return (
            <div className={style.wrapper}>
                <Button className={style.button} variant='contained' color='primary'>Hello World</Button>
                <Button className={style.button} variant='contained' color='secondary'>Hello World</Button>
                <Button className={style.button} variant='contained' color='default'>Hello World</Button>
            </div>
        );
    }
}

export default withRouter(HomeView);