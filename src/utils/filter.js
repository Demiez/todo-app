const filter = (items, filter) => {
    switch(filter){
        case "completed": {
            return items.map(eventItem => {
                if (!eventItem.completed){
                    eventItem = {...eventItem, visible : false};
                    return eventItem;
                }
                eventItem = {...eventItem, visible : true};
                return eventItem;
            })
        }
        case "uncompleted": {
            return items.map(eventItem => {
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
            return items.map(eventItem => {
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
            return items.map(eventItem => {
                eventItem = {...eventItem, visible : true};
                return eventItem;
            })
        }
        default:
            console.log('Items', items)
            return items;
    }
};

export default filter;
