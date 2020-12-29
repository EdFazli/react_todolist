import React, {Component} from "react";

class TodoList extends Component {
    render () {
        return (
            <div className="todoListMain">
                <div classname="header">
                    <form>
                        <input placeholder="Enter Task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;