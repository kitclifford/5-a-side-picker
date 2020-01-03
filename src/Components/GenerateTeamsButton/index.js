import { connect } from "react-redux";

import { generateTeams } from '../../actions';

import GenerateTeamsButton from './GenerateTeamsButton';

const mapStateToProps = state => {
    return {
        players: state.players,
        playersPerSide: state.playersPerSide
    };
};

const mapDispatchToProps = dispatch => {
    return{
        generateTeams: () => dispatch(generateTeams())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTeamsButton);