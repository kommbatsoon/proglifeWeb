import { connect } from 'react-redux';
import HeaderView from '../../components/HeaderView';
import {setActiveLanguage} from '../../core/actions/application';

const mapStateToProps = (state) => ({
    activeRoute: state.application.activeRoute,
    activeLanguage: state.application.activeLanguage,
});

const mapDispatchToProps = (dispatch) => ({
    setActiveLanguage: (data) => {
        dispatch(setActiveLanguage(data));
    }
});

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderView);

export default Header;
