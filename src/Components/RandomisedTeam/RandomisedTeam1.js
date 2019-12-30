import { connect } from "react-redux";

import RandomisedTeam from './RandomisedTeam';

const mapStateToProps = state => {
    return {
        team: state.team1,
        teamNumber: 1
    };
};

export default connect(mapStateToProps)(RandomisedTeam);