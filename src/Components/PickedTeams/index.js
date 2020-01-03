import { connect } from "react-redux";

import PickedTeams from './PickedTeams';

const mapStateToProps = state => {
    return {
        teamsPicked: state.teamsPicked,
        generateButtonText: 'Re-randomise Teams'
    };
};

export default connect(mapStateToProps)(PickedTeams);