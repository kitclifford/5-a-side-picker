import { connect } from "react-redux";

import { addPlayer } from '../../actions';

import AddPlayer from './AddPlayer';

const mapDispatchToProps = dispatch => {
    return{
        makePlayer: player_details => dispatch(addPlayer(player_details))
    }
};

export default connect(null, mapDispatchToProps)(AddPlayer);