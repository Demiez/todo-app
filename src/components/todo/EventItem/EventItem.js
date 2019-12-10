import React from 'react';
import PropTypes from 'prop-types';
import thumbUpIcon from "../../../assets/images/thumb-up.svg";
import crossIcon from "../../../assets/images/cross.svg";

const EventItem = (props) => {
    const {event, completeEvent, removeEvent } = props;
    const {title, desc, date, completed, visible} = event;
    // console.log(completed)
    return (
        <div className="eventItem"
             style={{
                 fontWeight: completed ? "bold" : "normal",
                 display: visible ? "block" : "none"
             }}
        >
            {title}
            {" | "}
            {desc}
            {" | "}
            {date}
            {" "}
            <button
                className="completeEvent"
                type="button"
                title="Complete this event"
                onClick={completeEvent}
            >
                <img src={thumbUpIcon} alt="complete event"/>
            </button>
            <button
                className="removeEvent"
                type="button"
                title="Remove this event"
                onClick={removeEvent}
            >
                <img src={crossIcon} alt="remove event"/>
            </button>
        </div>
    )
};

EventItem.propTypes = {
    event: PropTypes.object.isRequired,
    completeEvent: PropTypes.func.isRequired,
    removeEvent: PropTypes.func.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.string,
    completed: PropTypes.bool.isRequired,
};

export default EventItem;
