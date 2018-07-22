import ReduxCounter from './ReduxCounter.js';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        value: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        increment: () => { 
            dispatch({ type: "INCREMENT" })
        }
    }
}

let ReduxCounterContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);

export default ReduxCounterContainer;