import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import * as eventActions from '../../redux/actions/eventActions';

import './Modal.scss'

const modal = (props) => {
    const {
        showModal,
        editEventItem,
        eventItem
    } = props;
    const { title, desc, date } = props.eventItem;

    const [ modal , setModal ] = useState({
        title, desc, date
    });
    console.log("Modal data", modal);
    console.log("EventItem data", eventItem);
    console.log(editEventItem)
    //const [ descInput , setDesc ] = useState({...desc});
    //const [ dateInput , setDate ] = useState({...date});

    useEffect(() => {
        console.log ("mounted");
        return () => console.log("dismounted")
    },[]);
    // useEffect(() => {
    //     setModal({
    //         title, desc, date
    //     });
    // },[title, desc, date]);

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
    };
    // const editEventItemLocal = () => {
    //     props.dispatch(eventActions.editEventItem(eventItem, modal.title, modal.desc, modal.date));
    // };

    // const editHandler = () => {
    //     console.log("Handler",eventItem);
    //     editEventItem(eventItem, modal.title, modal.desc, modal.date)
    // };

    return (
        <div
            className="modal"
            // style={{
            //     display: show ? "block" : "none",
            // }}
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
                onClick={() => {
                    console.log("In the onclick", eventItem);
                    editEventItem(eventItem, modal.title, modal.desc, modal.date)
                }}
            >Edit</button>
            <button
                type="button"
                onClick={() => showModal(false)}
            >Cancel</button>
        </div>
    )
};

export default modal;
