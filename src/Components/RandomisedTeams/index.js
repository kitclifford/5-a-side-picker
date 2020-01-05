import { connect } from 'react-redux';

import RandomisedTeams from './RandomisedTeams';

const mapStateToProps = state => {
    return {
        team1: state.team1,
        team2: state.team2,
        team_one_color: state.team_one_color,
        team_two_color: state.team_two_color,
        team_one_name: state.team_one_name,
        team_two_name: state.team_two_name
    };
};

export default connect(mapStateToProps)(RandomisedTeams);