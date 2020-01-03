import { connect } from 'react-redux';

import PageHeader from './PageHeader';

const mapStateToProps = state => {
    return {
        playersPerSide: state.playersPerSide
    };
};

export default connect(mapStateToProps)(PageHeader);