import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../redux/actions/eventActions';
import EventItem from './EventItem/EventItem';
import validator from '../../utils/validator';

import './TodoPage.scss';

class TodoPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            eventItem: {
                title: "",
                desc: "",
                date: "",
                completed: false,
                visible: true,
            },
            filter: "all",
            search: "",
            titleValid: false,
            descValid: false,
            dateValid: false
        }
    }

    // componentDidUpdate(prevState) {
    //     const {filter} = this.state;
    //     if(prevState.filter !== this.state.filter) {
    //         this.props.dispatch(eventActions.filterEventItem(filter))
    //     }
    // }

    handleSearchFilter = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        if (name === 'filter') this.props.dispatch(eventActions.filterEventItem(value))
    };

    handleChange = event => {
        const {eventItems} = this.props;
        const {name, value} = event.target;
        const eventItem = { ...this.state.eventItem, [name]: value};
        this.setState({
            eventItem,
            [`${name}Valid`]: validator(eventItems, name, value),
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const {eventItems} = this.props;
        const {
            eventItem,
            titleValid,
            descValid,
            dateValid,
        } = this.state;
        if (titleValid &&
            descValid &&
            dateValid &&
            validator(eventItems, "title", eventItem.title)
        ) this.props.dispatch(eventActions.createEventItem(eventItem));
    };

    completeEventItem = (eventItem) => {
        this.props.dispatch(eventActions.completeEventItem(eventItem))
    };

    removeEventItem = (eventItem) => {
        this.props.dispatch(eventActions.removeEventItem(eventItem))
    };

    searchEventItem = () => {
        const {search} = this.state;
        this.props.dispatch(eventActions.searchEventItem(search))
    };

    render() {
        const {filter, search, titleValid, descValid, dateValid} = this.state;
        const {
            title,
            desc,
            date,
            completed,
            visible
        } = this.state.eventItem;

        return (
            <>
                <h1>ToDo</h1>
                <form className="todo_form" onSubmit={this.handleSubmit}>
                    <label className="search" htmlFor="search">
                        Search event:
                        <input
                            className="search-input"
                            type="text"
                            name="search"
                            onChange={this.handleSearchFilter}
                            value={search}
                        />
                        <button
                            type="button"
                            onClick={this.searchEventItem}
                        >Search</button>
                    </label>
                    <h2>Please enter your event:</h2>
                    <label htmlFor="title">
                        Event title:
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                            value={title}
                        />
                        <span
                            className="error-box"
                            style={{
                            color: !titleValid  ?  "red" : "transparent"
                        }}>
                            Error
                        </span>
                    </label>
                    <label htmlFor="desc">
                        Event description:
                        <input
                            type="text"
                            name="desc"
                            onChange={this.handleChange}
                            value={desc}
                        />
                        <span
                            className="error-box"
                            style={{
                            color: !descValid ?  "red" : "transparent"
                        }}>
                            Error
                        </span>
                    </label>
                    <label htmlFor="date">
                        Event date:
                        <input
                            type="date"
                            name="date"
                            onChange={this.handleChange}
                            value={date}
                        />
                        <span
                            className="error-box"
                            style={{
                                color: !dateValid ?  "red" : "transparent"
                            }}>
                            Error
                        </span>
                    </label>
                    <input type="submit" value="Save" />
                    <span
                        className="error-submit-box"
                        style={{
                            color: titleValid && descValid && dateValid  ?  "transparent" : "red"
                        }}>
                            Please fill in all the fields...
                        </span>
                </form>
                <h2>Here are your events:</h2>
                <div>
                    Filter:
                    <select
                        className="filter"
                        name="filter"
                        value={filter}
                        onChange={this.handleSearchFilter}
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                        <option value="passed">Passed</option>
                    </select>
                </div>
                {this.props.eventItems.map(eventItem => (
                    <EventItem
                        key={eventItem.title}
                        event={eventItem}
                        completed={completed}
                        visible={visible}
                        completeEvent={() => this.completeEventItem(eventItem)}
                        removeEvent={() => this.removeEventItem(eventItem)}
                    />
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
