import React, { useState } from 'react';

export default function Todo() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(["Junaid", "Allyan"]);
  const [isEditing, setIsEditing] = useState(false); // flag for edit mode
  const [editIndex, setEditIndex] = useState(null);  // index of task to edit

  // Add or Update Todo
  function handleAddOrUpdate() {
    if (inputText.trim() === '') return;

    if (isEditing) {
      // Update existing todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputText;
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new todo
      setTodos([...todos, inputText]);
    }

    setInputText('');
  }

  // Delete Todo
  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  // Edit Todo
  function editTodo(index) {
    setInputText(todos[index]);
    setIsEditing(true);
    setEditIndex(index);
  }

  return (
    <>
      <h2>Todos</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {isEditing ? 'Update Todo' : 'Add Todo'}
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => editTodo(index)}>Edit</button>{' '}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

// export default function Todo() {
//   const [inputText, setInputText] = useState('');
//   const [todos, setTodos] = useState(["JUnaid", "Allyan"]);

//   function addTodo() {
//     setTodos([...todos, inputText]);
//     setInputText('')
//   }

//   return (
//     <>
//     <h2>Todos</h2>
//     <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)}  />
//     <button onClick={addTodo}>Add Todo</button>
//     <ul>
//         {todos?.map((todo)=>{
//             return <li>{todo} <button>Edit</button><button>delete</button></li>
//         })}
//     </ul>

//     </>
//   )
// }
