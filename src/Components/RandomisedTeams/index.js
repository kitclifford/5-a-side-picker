import { connect } from 'react-redux';

import RandomisedTeams from './RandomisedTeams';

const mapStateToProps = state => {
    return {
        team1: state.team1,
        team2: state.team2
    };
};

export default connect(mapStateToProps)(RandomisedTeams);