import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>Your todo list here!</h1>
        <p>Multiple events can be stored in one place!!!</p>
        <Link to="todo" className="btn btn-primary btn-lg">
            Add event
        </Link>
    </div>
);

export default HomePage;