import React from 'react';
import Todo from './Todo.js';

const Todolist = ( {todos, setTodos, filteredTodos} ) => {
    return (
      
        <div className="todo-container">
            <ul className="todo-list">
               {filteredTodos.map((todo) => (
                   <Todo 
                        setTodos={setTodos}
                        todo={todo}
                        todos={todos}
                        key={todo.id}
                        text={todo.text} 
                    />
               ))}
            </ul>
        </div>
        
    );
}

export default Todolist;
