import { connect } from "react-redux";

import { reset } from '../../actions';

import ResetButton from './ResetButton';

const mapDispatchToProps = dispatch => {
    return{
        reset: () => dispatch(reset())
    }
};

export default connect(null, mapDispatchToProps)(ResetButton);