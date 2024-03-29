import * as types from '../actions/actionTypes';

export default function eventItemReducer (state = [], action) {
    switch (action.type) {
        case types.CREATE_EVENT_ITEM:
            return [...state, action.eventItem];
        case types.COMPLETE_EVENT_ITEM: {
            let selectedItem = action.eventItem;

            return state.map(eventItem => {
                if (eventItem === selectedItem && !selectedItem.completed){
                    eventItem = {...eventItem, completed : true};
                    console.log("Complete => ", eventItem);
                    return eventItem;
                }
                if (eventItem === selectedItem && selectedItem.completed){
                    eventItem = {...eventItem, completed : false};
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
        case types.EDIT_EVENT_ITEM: {
            let selectedItem = action.eventItem;
            const { title, desc, date } = action;
            const checkTitle = (state) => {
                console.log("searching title", title)
                const checkedState = state.filter(eventItem => eventItem.title === title);
                return checkedState.length === 0;
            };

            return state.map(eventItem => {
                console.log(eventItem, selectedItem);
                if (JSON.stringify(eventItem) === JSON.stringify(selectedItem)
                    && checkTitle(state)
                ){
                    eventItem = {...selectedItem, title : title, desc: desc, date: date};
                    console.log("Edit => ", eventItem);
                    return eventItem;
                }
                return eventItem;
            })
        }

        default:
            return state;
    }
}
