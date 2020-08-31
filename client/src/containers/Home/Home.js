import React, { memo } from 'react';
import { ActiveTodoList, AddTodo, CompletedTodoList } from 'components';
import { ActionsHook as actionsHook, TodoHook as todoHook } from 'hooks';

const Home = memo(() => {
  const { actionObj, updateActions, todoObj, ...actions } = actionsHook();
  const { addTodo, activeTodos, completedTodos, updateTodos, removeTodo } = todoHook();

  return (
    <>
      <AddTodo
        inputProps={{
          value: todoObj.text,
          onChange: actions.changeInput,
        }}
        value={todoObj.text}
        onAddClick={addTodo}
        clear={actions.clearInput}
      />
      <ActiveTodoList
        updateActionsProp={updateActions}
        todoList={activeTodos()}
        actions={actionObj}
        update={updateTodos}
        deleteProp={removeTodo}
      />
      <CompletedTodoList
        completedList={completedTodos()}
        actions={actionObj}
        deleteProp={removeTodo}
      />
    </>
  );
});

export default Home;
