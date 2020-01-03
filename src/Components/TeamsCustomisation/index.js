import { connect } from 'react-redux';

import { changeNumberPerSide } from '../../actions';

import TeamsCustomisation from './TeamsCustomisation';

const mapStateToProps = state => {
    return {
        playersPerSide: state.playersPerSide
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeNumberPerSide: n => dispatch(changeNumberPerSide(Number(n)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsCustomisation);