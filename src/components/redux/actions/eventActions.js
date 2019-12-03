import * as types from './actionTypes';

export function createEventItem (eventItem) {
    return {
        type: types.CREATE_EVENT_ITEM,
        eventItem
    }
}
