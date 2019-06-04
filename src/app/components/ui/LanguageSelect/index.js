import React from 'react';
import style from './styles.scss';
import _ from 'lodash';
import {AVAILABLE_LANGUAGES} from '../../../util/languages';



export default class LanguageSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownVisible: false
        };
        this.languages = AVAILABLE_LANGUAGES;
    }

    componentDidMount () {
        document.addEventListener('click', this.handleOutsideClick.bind(this), false);
    }

    handleOutsideClick (e) {
        if (this.wrapperRefs && !this.wrapperRefs.contains(e.target) && this.state.dropDownVisible) {
            this.setState({dropDownVisible: false});
        }
    }

    toggleDropDown = () => {
      this.setState(prevState => ({dropDownVisible: !prevState.dropDownVisible}));
    };

    onSelectLanguage = (id) => {
      this.props.onSelect(id);
      this.toggleDropDown();
    };

    render() {
        const {active} = this.props;
        const {dropDownVisible} = this.state;
        const dropDownClass = style.dropDownWrapper + ' ' + (dropDownVisible ? style.dropDownWrapper_visible : '');

        return (
            <div className={style.wrapper} ref={ref => this.wrapperRefs = ref}>
                <div className={style.activeLanguage} onClick={this.toggleDropDown}>
                    {active.acronym}
                </div>

                <div className={dropDownClass}>
                    <ListOfItems
                        data={this.languages}
                        Item={(key, itemData) => <LanguageItem key={key} data={itemData} onClick={id => this.onSelectLanguage(id)}/>}
                    />
                </div>
            </div>
        );
    }
}

const LanguageItem = ({data, onClick}) => {
    const iconStyle = {
        backgroundImage: `url(${data.image})`,
        backgroundSize: '100%'
    };

    return (
        <div className={style.languageItem} onClick={() => onClick(data.id)}>
            <div className={style.name}>{data.name}</div>
            <div className={style.icon} style={iconStyle}/>
        </div>
    );
};

const ListOfItems = ({data, noDataContent = '', Item}) => {

    if (_.isEmpty(data)) {
        return noDataContent || '';
    }

    return data.map(item => Item(item.id, item));
};
