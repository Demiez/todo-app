import React from 'react';
import EventItem from "../EventItem/EventItem";

const viewItems = props => {
    const {
        eventItems,
        completeEvent,
        editEvent,
        removeEvent,
    } = props;
    return (
        <>
            {eventItems.map(eventItem => (
                <EventItem
                    key={eventItem.title}
                    event={eventItem}
                    completed={eventItem.completed}
                    visible={eventItem.visible}
                    completeEvent={() => completeEvent(eventItem)}
                    removeEvent={() => removeEvent(eventItem)}
                    editEventItem={editEvent}
                />
            ))}
        </>
    )
};

export default viewItems;
