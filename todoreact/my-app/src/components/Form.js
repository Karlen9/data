import React from "react";


const Form = () => {
    return (
        <section>
            <form>
                <input type="text" className="todo-input"/>
                <button className="todo-button" type="submit">
            
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </section> 
    );
}


export default Form;