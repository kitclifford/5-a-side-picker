import { connect } from "react-redux";

import TeamSettings from './TeamSettings';

const mapStateToProps = state => {
    return {
        teamsPicked: state.teamsPicked,
        generateButtonText: 'Generate Teams'

    };
};

export default connect(mapStateToProps)(TeamSettings);