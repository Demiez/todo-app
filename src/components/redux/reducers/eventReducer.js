import * as types from '../actions/actionTypes';

export default function eventItemReducer (state = [], action) {
    switch (action.type) {
        case types.CREATE_EVENT_ITEM:
            return [...state, action.eventItem];
        case types.COMPLETE_EVENT_ITEM: {
            let selectedItem = action.eventItem;

            return state.map(eventItem => {
                if (eventItem === selectedItem){
                    eventItem = {...eventItem, completed : true};
                    console.log("Complete => ", eventItem);
                    return eventItem;
                }
                return eventItem;
            })
        }
        case types.REMOVE_EVENT_ITEM: {
            const removedItem = action.eventItem;
            console.log("Remove => ", removedItem);
            return state.filter(eventItem => eventItem !== removedItem);
        }
        default:
            return state;
    }
}
