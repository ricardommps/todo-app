import { useState, useEffect } from 'react';
import * as todoService from 'services/todoService';

export const todoHookModel = (todos, setTodos) => ({
  todos,
  addTodo: text => {
    if (text) {
      const itemSave = {
        title: text,
      };
      todoService
        .addTodo(itemSave)
        .then(res => {
          const { data } = res;
          todos.push(data);
          setTodos([...todos]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  activeTodos: () => todos.filter(todo => todo.completed === false),
  completedTodos: () => todos.filter(todo => todo.completed === true),
  updateTodos: item => {
    todoService
      .updateTodo(item)
      .then(() => {
        setTodos([...todos]);
      })
      .catch(err => {
        console.log(err);
      });
  },
  removeTodo: checkedId => {
    todoService
      .deleteTodo(checkedId)
      .then(() => {
        setTodos(todos.filter(todo => checkedId !== todo.id));
      })
      .catch(err => {
        console.log(err);
      });
  },
  getTodos: () => {
    return todos;
  },
});

export const TodoHook = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);
  useEffect(() => {
    todoService
      .getTodos()
      .then(data => {
        setTodos(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return todoHookModel(todos, setTodos);
};
