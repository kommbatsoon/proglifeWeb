import { connect } from 'react-redux';
import HeaderView from '../../components/HeaderView';

const mapStateToProps = (state) => ({
    activeRoute: state.application.activeRoute
});

const mapDispatchToProps = (dispatch) => ({});

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderView);

export default Header;
