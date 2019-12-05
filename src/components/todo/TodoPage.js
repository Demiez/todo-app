import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../redux/actions/eventActions';
import crossIcon from '../../assets/images/cross.svg';
import thumbUpIcon from '../../assets/images/thumb-up.svg';

import './TodoPage.scss';

class TodoPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            eventItem: {
                title: "",
                desc: "",
                date: "",
                style: {
                    textDecoration: "none"
                }
            },
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        const eventItem = { ...this.state.eventItem, [name]: value}
        this.setState({eventItem});
    };

    handleSubmit = event => {
        event.preventDefault();
        const {eventItem} = this.state;
        // console.log("Passing: ", eventItem);
        this.props.dispatch(eventActions.createEventItem(eventItem))
    };

    completeEventItem = (eventItem) => {
        this.props.dispatch(eventActions.completeEventItem(eventItem))
    };

    removeEventItem = (eventItem) => {
        this.props.dispatch(eventActions.removeEventItem(eventItem))
    };

    render() {
        const {
            title,
            desc,
            date
        } = this.state.eventItem;


        return (
            <>
                <h1>ToDo</h1>
                <form className="todo_form" onSubmit={this.handleSubmit}>
                    <h2>Please enter your event:</h2>
                    <label htmlFor="title">
                        Event title:
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                            value={title}
                        />
                    </label>
                    <label htmlFor="desc">
                        Event description:
                        <input
                            type="text"
                            name="desc"
                            onChange={this.handleChange}
                            value={desc}
                        />
                    </label>
                    <label htmlFor="date">
                        Event date:
                        <input
                            type="date"
                            name="date"
                            onChange={this.handleChange}
                            value={date}
                        />
                    </label>
                    <input type="submit" value="Save" />
                </form>
                <h2>Here are your events:</h2>
                {this.props.eventItems.map(eventItem => (
                    <div className="eventItem" key={eventItem.title} style={eventItem.style}>
                        {eventItem.title}
                        {" | "}
                        {eventItem.desc}
                        {" | "}
                        {eventItem.date}
                        {" "}
                        <button
                            className="completeEvent"
                            type="button"
                            title="Complete this event"
                            onClick={() => this.completeEventItem(eventItem)}
                        >
                            <img src={thumbUpIcon} alt="remove event"/>
                        </button>
                        <button
                            className="removeEvent"
                            type="button"
                            title="Remove this event"
                            onClick={() => this.removeEventItem(eventItem)}
                        >
                            <img src={crossIcon} alt="remove event"/>
                        </button>
                    </div>
                ))}
            </>
        )
    }
}

function mapStateToProps (state) {
    return {
        eventItems: state.eventItems
    }
}

export default connect(mapStateToProps)(TodoPage);
