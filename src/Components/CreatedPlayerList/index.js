import { connect } from "react-redux";

import { deletePlayer, generateTeams } from '../../actions';

import CreatedPlayerList from './CreatedPlayerList';

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

const mapDispatchToProps = dispatch => {
    return{
        deletePlayer: (id) => dispatch(deletePlayer(id)),
        generateTeams: () => dispatch(generateTeams())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedPlayerList);