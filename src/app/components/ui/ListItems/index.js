import _ from 'lodash';

const ListItems = ({data, noDataContent, Item}) => {

    if (_.isEmpty(data)) {
        return noDataContent;
    }

    return data.map(item => Item(item.id, item));
};

export default ListItems;

