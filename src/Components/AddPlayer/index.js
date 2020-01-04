import { connect } from "react-redux";

import { addPlayer } from '../../actions';

import AddPlayer from './AddPlayer';

const mapStateToProps = state => {
    return{
        players: state.players,
        playersPerSide: state.playersPerSide
    }
}

const mapDispatchToProps = dispatch => {
    return{
        makePlayer: player_details => dispatch(addPlayer(player_details))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);