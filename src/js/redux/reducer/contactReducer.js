import * as types from '../../constant/actionType';

const defaultState = {
    isShowing: false
};

const contactReducer = (state = defaultState, action) => {
    switch (action.type){
        case types.SHOW_CONTACT_DIALOG:
            return {
                isShowing: !state.isShowing
            };
        default:
            return state
    }
};

export default contactReducer;