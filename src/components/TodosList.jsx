import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [{
    id: 1,
    tarea: 'Explicar reducer',
    estado: false,
}];

const newTodo = {
    id: 2,
    tarea: 'Explicar store',
    estado: false,
};

const editTodo = {
    type: '[TODOS] Check Todo',
    payload: newTodo,
};

const deleteTodo = {
    type: '[TODOS] Delete Todo',
    payload: newTodo,
};

const deleteTodos = {
    type: '[TODOS] Deletes Todos',
    payload: newTodo,
};

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TODOS] Add Todo':
            return [...state, action.payload];
        case '[TODOS] Check Todo':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        estado: !todo.estado,
                    }
                }
                return state;
            });
        case '[TODOS] Delete Todo':
            return state.filter(todo => todo.id !== action.payload);
        case '[TODOS] Delete Todos':
            return [...state, action.payload];
        default:
            return state;
    }
};

export const TodosList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const { todo, form, handleInputChange, } = useForm({ tarea: '' });

    const addTodo = (event) => {

        event.preventDefault();

        if (event.target.value === '') return;

        const todo = {
            id: new Date().getTime(),
            tarea: form.todo,
            estado: false,
        };

        const action = {
            type: '[TODOS] Add Todo',
            payload: todo,
        };

        dispatch(action);
    };

    const checkTodo = ({ id }) => {
        const action = {
            type: '[TODOS] Check Todo',
            payload: id,
        }
        dispatch(action);
    }

    const deleteTodo = ({ id }) => {
        const action = {
            type: '[TODOS] Delete Todo',
            payload: id,
        }
        dispatch(action);
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Ingresa una tarea"
                    value={todo}
                    onChange={handleInputChange}
                />
                <button>Send</button>
            </form>

            <hr />

            <ul>
                {
                    state.map((todo) => (
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <li key={todo.id} style={{ marginRight: '10px'}}>
                                <span style={{ marginRight: '10px' }}>{todo.tarea}</span>
                                <input type="checkbox" className="self-center" onChange={() => checkTodo(todo)} />
                            </li>
                            <button onClick={ () => deleteTodo(todo) }>Delete</button>
                        </div>
                    ))
                }
            </ul>
        </>
    )
}
