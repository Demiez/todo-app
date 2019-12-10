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
        case types.SEARCH_EVENT_ITEM: {
            const { search } = action;

            return state.map(eventItem => {
                if (search && eventItem.title !== search){
                    eventItem = {...eventItem, visible : false};
                    return eventItem;
                }
                eventItem = {...eventItem, visible : true};
                return eventItem;
            })
        }
        case types.FILTER_EVENT_ITEM: {
            const { filter } = action;
            switch (filter) {
                case "completed": {
                    return state.map(eventItem => {
                        if (!eventItem.completed){
                            eventItem = {...eventItem, visible : false};
                            return eventItem;
                        }
                        eventItem = {...eventItem, visible : true};
                        return eventItem;
                    })
                }
                case "uncompleted": {
                    return state.map(eventItem => {
                        if (eventItem.completed){
                            eventItem = {...eventItem, visible : false};
                            return eventItem;
                        }
                        eventItem = {...eventItem, visible : true};
                        return eventItem;
                    })
                }
                case "passed": {
                    const date = new Date();
                    return state.map(eventItem => {
                        const itemDate = new Date(eventItem.date);
                        if (date.getTime() > itemDate.getTime()){
                            eventItem = {...eventItem, visible : false};
                            return eventItem;
                        }
                        eventItem = {...eventItem, visible : true};
                        return eventItem;
                    })
                }
                case "all": {
                    return state.map(eventItem => {
                        eventItem = {...eventItem, visible : true};
                        return eventItem;
                    })
                }
                default:
                    return state;
            }
        }

        // case types.SEARCH_EVENT_ITEM: {
        //     const { search } = action;
        //     let searchItem = null;
        //     console.log("SEARCH REDUCER: state =>", state)
        //
        //     state.map(eventItem => {
        //         if (eventItem.title === search) {
        //             console.log(eventItem);
        //             searchItem = {...eventItem};
        //             console.log("searchItem", searchItem)
        //         }
        //         return eventItem;
        //     });
        //
        //     return searchItem ? [searchItem] : state;
        // }
        default:
            return state;
    }
}
