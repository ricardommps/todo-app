import React, { memo } from 'react';
import { Fab, Grid, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { SectionCard, MInput, CardIcon } from './';

const useStyles = makeStyles(theme => ({
  layout: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    paddingRight: 16,
  },
  addBtn: {
    textAlign: 'center',
  },
  headerSvgIconStyle: {
    width: 42,
    height: 38,
  },
}));

const IconComponent = ({ classIcon }) => (
  <CardIcon>
    <AddIcon className={classIcon} />
  </CardIcon>
);

export const AddTodo = memo(({ inputProps, onAddClick, value, clear }) => {
  const classes = useStyles();
  const addTodoItem = () => {
    onAddClick(value);
    if (clear) {
      clear();
    }
  };
  return (
    <>
      <Grid container={true} direction={'row'} alignContent={'center'} justify={'center'}>
        <SectionCard
          cardIcon={<IconComponent classIcon={classes.headerSvgIconStyle} />}
          label={'ADD ITEM'}
        >
          <Grid container={true} className={classes.layout}>
            <Grid xs={10} item={true} className={classes.input}>
              <MInput
                mInputLabelProps={{ children: 'What do you want to do?' }}
                mFormControlProps={{
                  fullWidth: true,
                }}
                mInputProps={inputProps}
              />
            </Grid>
            <Grid xs={2} item={true} className={classes.addBtn}>
              <Fab
                color="primary"
                aria-label="Add"
                size={'medium'}
                onClick={addTodoItem}
                disabled={!value}
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </SectionCard>
      </Grid>
    </>
  );
});
