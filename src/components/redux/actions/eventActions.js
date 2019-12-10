import * as types from './actionTypes';

export function createEventItem (eventItem) {
    return {
        type: types.CREATE_EVENT_ITEM,
        eventItem
    }
}

export function completeEventItem (eventItem) {
    return {
        type: types.COMPLETE_EVENT_ITEM,
        eventItem
    }
}

export function removeEventItem (eventItem) {
    return {
        type: types.REMOVE_EVENT_ITEM,
        eventItem
    }
}

export function searchEventItem (search) {
    return {
        type: types.SEARCH_EVENT_ITEM,
        search
    }
}

export function filterEventItem (filter) {
    return {
        type: types.FILTER_EVENT_ITEM,
        filter
    }
}
