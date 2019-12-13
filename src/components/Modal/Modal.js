import React, { useState, useEffect } from 'react';

import './Modal.scss'

const modal = (props) => {
    const { show, closeModal, editEventItem, eventItem } = props;
    const { title, desc, date } = props.eventItem;

    const [ titleInput , setTitle ] = useState(title);
    const [ descInput , setDesc ] = useState({...desc});
    const [ dateInput , setDate ] = useState({...date});

    useEffect(() => {
        setTitle(title);
    },[title]);

    useEffect(() => {
        setDesc(desc);
    },[desc]);

    useEffect(() => {
        setDate(date);
    },[date]);

    const onChangeHandler = event => {
        const { name, value } = event.target;
        switch(name){
            case "title":
                setTitle(value);
                break;
            case "desc":
                setDesc(value);
                break;
            case "date":
                setDate(value);
                break;
            default:
                break;
        }
    };

    return (
        <div
            className="modal"
            style={{
                display: show ? "block" : "none",
            }}
        >
            <h2>Edit event:</h2>
            <input
                name="title"
                type="text"
                value={titleInput}
                onChange={onChangeHandler}
            />
            <input
                name="desc"
                type="text"
                value={descInput}
                onChange={onChangeHandler}
            />
            <input
                name="date"
                type="date"
                value={dateInput}
                onChange={onChangeHandler}
            />
            <button
                type="button"
                onClick={() => editEventItem(eventItem, titleInput, descInput, dateInput)}
            >Edit</button>
            <button
                type="button"
                onClick={closeModal}
            >Cancel</button>
        </div>
    )
};

export default modal;
