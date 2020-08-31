import React, { memo } from 'react';
import {
  Divider,
  Fab,
  Grid,
  ListItem,
  Typography,
  makeStyles,
  ListItemSecondaryAction,
} from '@material-ui/core';
import Check from '@material-ui/icons/Done';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/SaveAlt';
import Close from '@material-ui/icons/Close';
import Delete from '@material-ui/icons/Delete';

import { sendNotification } from 'utils/service-worker';

import {
  UpdateActionIcon,
  ActionIcon,
  ModifyTodo,
  onEditClick,
  onCancelClick,
  onSaveClick,
} from './RowActions';
import { mColors } from 'assets/colors';

const useStyles = makeStyles(theme => ({
  doneBtn: {
    width: 30,
    height: 30,
    minWidth: 0,
    minHeight: 0,
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
  },
  rowText: {
    marginTop: '3px',
    wordBreak: 'break-word',
  },
  input: {
    paddingRight: 16,
  },
  inputContainer: {
    marginTop: -20,
  },
  addBtn: {
    textAlign: 'center',
  },
}));

const modifiedValues = [];
export const TodoRow = memo(
  ({ todo, actionProps, completed, updateItem, updateActions, deleteItem }) => {
    const classes = useStyles();
    const isActive = !completed;
    const editEntries = actionProps.edit;
    const isEdit = isActive && Object.keys(editEntries).indexOf(todo.id + '') !== -1;
    const gridSizes = { xs: 11, sm: 10, md: 11, lg: 11 };
    if (isActive) {
      gridSizes.xs = !isEdit ? 7 : 9;
      gridSizes.sm = !isEdit ? 8 : 12;
      gridSizes.md = !isEdit ? 8 : 11;
      gridSizes.lg = !isEdit ? 9 : 11;
    }
    return (
      <>
        <ListItem>
          {isActive && !isEdit && (
            <Grid item={true} xs={2} lg={1}>
              <Fab aria-label="Check" className={classes.doneBtn} color={'primary'}>
                <Check
                  onClick={() => {
                    todo.completed = true;
                    updateItem(todo);
                    sendNotification({
                      title: `You have completed todo with id ${todo.id}!`,
                      text: todo.title,
                    });
                  }}
                />
              </Fab>
            </Grid>
          )}
          <Grid item={true} xs={gridSizes.xs} sm={gridSizes.sm} md={gridSizes.md} lg={gridSizes.lg}>
            {!isEdit ? (
              <Typography component={'p'} variant="body1">
                {todo.title}
              </Typography>
            ) : (
              <ModifyTodo
                value={todo.title}
                formControlProps={{
                  fullWidth: true,
                  className: classes.inputContainer,
                }}
                onInputChangeCallBack={e => {
                  modifiedValues[todo.id] = e.target.value;
                }}
              />
            )}
          </Grid>
          <ListItemSecondaryAction>
            {isActive && (
              <UpdateActionIcon
                pIsEdit={isEdit}
                saveCallBack={() => {
                  onSaveClick(modifiedValues, updateItem, todo, editEntries, updateActions);
                }}
                editCallBack={() => {
                  onEditClick(modifiedValues, todo, editEntries, updateActions);
                }}
                EditIcon={<Edit fontSize={'small'} style={{ color: mColors.completedLite }} />}
                SaveIcon={<Save fontSize={'small'} style={{ color: mColors.lite }} />}
              />
            )}
            {!isEdit ? (
              <ActionIcon
                onClickCallBack={() => {
                  deleteItem(todo.id);
                }}
                ariaLabel={'Delete'}
                Icon={<Delete fontSize={'small'} style={{ color: mColors.warn }} />}
              />
            ) : (
              <ActionIcon
                onClickCallBack={() => {
                  onCancelClick(todo, editEntries, updateActions);
                }}
                ariaLabel={'Close'}
                Icon={<Close fontSize={'small'} style={{ color: mColors.warn }} />}
              />
            )}
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </>
    );
  }
);
