import { connect } from "react-redux";

import CreatedPlayerList from './CreatedPlayerList';

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

export default connect(mapStateToProps)(CreatedPlayerList);