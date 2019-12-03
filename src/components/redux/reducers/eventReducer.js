import * as types from '../actions/actionTypes';

export default function eventItemReducer (state = [], action) {
    switch (action.type) {
        case types.CREATE_EVENT_ITEM:
            return [...state, action.eventItem];
        default:
            return state;
    }
}
