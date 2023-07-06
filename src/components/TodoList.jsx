// const handleRemoveTask = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
// };
const TodoList = ({ todos, setTodos }) => {
    const handleUpdateTask = (index) => {
        let newTodos = todos.map((todo, todoIndex)=>{
            if (todoIndex === index)
                todo.isCompleted = !todo.isCompleted
            return todo;
        });
        setTodos(newTodos);
        };
    const handleRemoveTask = (index) => {
        const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
        setTodos(newTodos);
    };

    return (
        <ul>
            { todos.map((todo, index)=>(
            <li key={ index }
            style={
                todo.isCompleted === true ? { textDecorationLine: 'line-through' } : {}
                }
            >
            <input
                type="checkbox"
                checked={ todo.isCompleted }
                onChange={() => { handleUpdateTask(index) } }
            />
                { todo.task }
            <button
                onClick={() => handleRemoveTask(index)}
                style={{ 
                    cursor: 'pointer',
                    marginLeft: '1rem'
                 }}
            >
                削除
            </button>
            </li>                   
            ))}
        </ul>
    );
};

export default TodoList;