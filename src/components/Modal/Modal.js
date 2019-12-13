import React, { useState, useEffect } from 'react';

import './Modal.scss'

const modal = (props) => {
    const { show, closeModal, editEventItem, eventItem } = props;
    const { title, desc, date } = props.eventItem;

    const [ modal , setModal ] = useState({
        title, desc, date
    });
    //const [ descInput , setDesc ] = useState({...desc});
    //const [ dateInput , setDate ] = useState({...date});

    useEffect(() => {
        setModal({
            title, desc, date
        });
    },[title, desc, date]);

    // useEffect(() => {
    //     setDesc(desc);
    // },[desc]);
    //
    // useEffect(() => {
    //     setDate(date);
    // },[date]);

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setModal({... modal, [name]: value})
        // switch(name){
        //     case "title":
        //         setTitle(value);
        //         break;
        //     case "desc":
        //         setDesc(value);
        //         break;
        //     case "date":
        //         setDate(value);
        //         break;
        //     default:
        //         break;
        // }
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
                value={modal.title}
                onChange={onChangeHandler}
            />
            <input
                name="desc"
                type="text"
                value={modal.desc}
                onChange={onChangeHandler}
            />
            <input
                name="date"
                type="date"
                value={modal.date}
                onChange={onChangeHandler}
            />
            <button
                type="button"
                onClick={() => editEventItem(eventItem, modal.title, modal.desc, modal.date)}
            >Edit</button>
            <button
                type="button"
                onClick={closeModal}
            >Cancel</button>
        </div>
    )
};

export default modal;
