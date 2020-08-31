import React, { memo } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { MInput } from './';

export const onEditClick = (pMofifiedValues, todo, edits, update) => {
  const id = todo.id;
  edits[id] = todo;
  pMofifiedValues[id] = todo.title;
  update({ edit: { ...edits } });
};

export const onCancelClick = (todo, edits, update) => {
  delete edits[todo.id];
  update({ edit: { ...edits } });
};

export const ActionIcon = ({ onClickCallBack, ariaLabel, Icon }) => (
  <IconButton aria-label={ariaLabel} onClick={onClickCallBack}>
    {Icon}
  </IconButton>
);

export const onSaveClick = (values, updateItem, todo, edits, update) => {
  const updatedValue = values[todo.id];
  updatedValue.trim();
  if (updatedValue.length !== 0) {
    todo.title = updatedValue;
  }
  delete values[todo.id];
  Promise.all([updateItem(todo), onCancelClick(todo, edits, update)]);
};

export const UpdateActionIcon = memo(
  ({ pIsEdit, editCallBack, saveCallBack, EditIcon, SaveIcon }) =>
    !pIsEdit ? (
      <ActionIcon ariaLabel="Edit" onClickCallBack={editCallBack} Icon={EditIcon} />
    ) : (
      <ActionIcon ariaLabel="Save" onClickCallBack={saveCallBack} Icon={SaveIcon} />
    )
);

export const ModifyTodo = ({
  value,
  onKeyEnterCallBack,
  onInputChangeCallBack,
  formControlProps,
}) => (
  <Grid item={true} xs={10} md={11}>
    <MInput
      mFormControlProps={formControlProps}
      mInputProps={{
        defaultValue: value,
        onChange: onInputChangeCallBack,
        onKeyDown: onKeyEnterCallBack,
        fullWidth: true,
      }}
    />
  </Grid>
);
