import { useState } from 'react';

const defaultState = {
  title: '',
};
const actions = {
  edit: {},
  delete: undefined,
};

export const ActionsHook = () => {
  const [todoObj, setInputValue] = useState(defaultState);
  const [actionObj, setAction] = useState(actions);
  return {
    todoObj,
    actionObj,
    changeInput: event => {
      todoObj.text = event.target.value;
      setInputValue({ ...todoObj });
    },
    clearInput: () => {
      setInputValue(defaultState);
    },
    updateActions: action => setAction({ ...action }),
  };
};
