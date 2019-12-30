import { connect } from "react-redux";

import RandomisedTeam from './RandomisedTeam';

const mapStateToProps = state => {
    return {
        team: state.team2,
        teamNumber: 2
    };
};

export default connect(mapStateToProps)(RandomisedTeam);