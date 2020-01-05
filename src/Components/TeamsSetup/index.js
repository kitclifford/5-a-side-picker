import { connect } from "react-redux";

import TeamsSetup from './TeamsSetup';

const mapStateToProps = state => {
    return {
        teamsPicked: state.teamsPicked,
        generateButtonText: 'Generate Teams',
        players: state.players,
        playersPerSide: state.playersPerSide

    };
};

export default connect(mapStateToProps)(TeamsSetup);