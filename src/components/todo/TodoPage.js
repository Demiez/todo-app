import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../redux/actions/eventActions';


import './TodoPage.scss';

class TodoPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            eventItem: {
                title: "",
                desc: "",
                date: ""
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
                {this.props.eventItems.map(eventItem => (
                    <div key={eventItem.title}>
                        {eventItem.title}
                        {" | "}
                        {eventItem.desc}
                        {" | "}
                        {eventItem.date}
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
