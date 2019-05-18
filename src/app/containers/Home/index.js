import { connect } from 'react-redux';
import HomeView from '../../components/HomeView';

const mapStateToProps = (state, props) => ({
    usersData: state.application.users
});

const mapDispatchToProps = (dispatch) => ({});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default Home;