import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, deleteTodo, fetchTodo } from '../Reducers/TodoReducers'
import {logout} from '../Reducers/AuthReducer'

function Todo() {
    const [mytodo, setTodo] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const AddTodo = () => {
        dispatch(createTodo({ todo: mytodo }))
    }
    useEffect(() => {
        dispatch(fetchTodo())
    }, [])
    return (
        <div>
            <input
                placeholder='Add Todo'
                value={mytodo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button className='btn #ff4081 pink accent-2' 
                onClick={() => AddTodo()}> Add Todo</button>

            <ul className="collection">
                {todos.map(item => {
                  return <li className="collection-item" key={item._id}
                  onClick = {()=>dispatch(deleteTodo(item._id))}>{item.todo}</li>

                })
                }

            </ul>
            <button className='btn #ff4081 pink accent-2' 
            onClick={()=> dispatch(logout())}>logout</button>
        </div>
    )
}

export default Todo
