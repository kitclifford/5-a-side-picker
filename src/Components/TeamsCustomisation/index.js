import { connect } from 'react-redux';

import { changeNumberPerSide } from '../../actions';
import { teamsCustomisation } from '../../actions';


import TeamsCustomisation from './TeamsCustomisation';

const mapStateToProps = state => {
    return {
        playersPerSide: state.playersPerSide
    };
};

const mapDispatchToProps = dispatch => {
    return {
        teamsCustomisation: settings => dispatch(teamsCustomisation(settings))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsCustomisation);