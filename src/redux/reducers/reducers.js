import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
} from "../types/type";

const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "Learn Python",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Learn CSS",
      isDone: true,
    },
    {
      id: Math.random(),
      task: "Learn Redux",
      isDone: true,
    },
    {
      id: Math.random(),
      task: "Learn JavaScript",
      isDone: true,
    },
  ],
  filteredTodos: [],
};

const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, todos: [...state.todos, payload] };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((elt) => elt.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === payload.idTask ? { ...elt, task: payload.value } : elt
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filteredTodos:
          payload === "completed"
            ? state.todos.filter((todo) => todo.isDone)
            : payload === "uncompleted"
            ? state.todos.filter((todo) => !todo.isDone)
            : [],
      };
    default:
      return state;
  }
};

export default TaskReducer;
