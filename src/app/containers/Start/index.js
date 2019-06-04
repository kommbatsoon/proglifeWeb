import { connect } from 'react-redux';
import StartView from '../../components/StartView';

const mapStateToProps = (state) => ({
    usersData: state.application.users,
    textConfig: state.application.textConfig
});

const mapDispatchToProps = (dispatch) => ({});

const Start = connect(mapStateToProps, mapDispatchToProps)(StartView);

export default Start;