import React from 'react';
import style from './styles.scss';
import {withRouter} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import ListItems from '../ui/ListItems';
import NoDataToDisplay from '../ui/NoDataToDisplay';

class StartView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {usersData, textConfig} = this.props;

        return (
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>{textConfig.title}</h1>
                    <ListItems
                        data={usersData}
                        noDataContent={<NoDataToDisplay textConfig={textConfig}/>}
                        Item={(key, itemData) => <UserItem key={key} data={itemData}/>}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(StartView);

const UserItem = ({data}) => {
  return (
      <div className={style.userItem}>
          <Avatar alt={data.name} src={data.avatar} className={style.avatar}/>
          <div className={style.name}>{data.name}</div>
      </div>
  );
};
