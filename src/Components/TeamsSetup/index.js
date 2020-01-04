import { connect } from "react-redux";

import TeamsSetup from './TeamsSetup';

const mapStateToProps = state => {
    return {
        teamsPicked: state.teamsPicked,
        generateButtonText: 'Generate Teams'

    };
};

export default connect(mapStateToProps)(TeamsSetup);