import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 5,
    padding: 15,
    marginTop: '-50px',
    marginRight: 15,
    float: 'left',
    color: '#fff',
  },
  cardPrimary: {
    background: `linear-gradient(60deg, #29b6f6, #4fc3f7)`,
    ...theme.boxPrimary,
  },
  cardActive: {
    background: `linear-gradient(60deg, #ffa21a, #ffaa2e)`,
    ...theme.boxActive,
  },
  cardSuccess: {
    background: `linear-gradient(60deg, #5cb860, #6abe6d)`,
    ...theme.boxCompleted,
  },
}));

export const CardIcon = ({ children, active, completed }) => {
  const classes = useStyles();
  const boxClass = active
    ? classes.cardActive
    : completed
    ? classes.cardSuccess
    : classes.cardPrimary;
  return <div className={classes.card + ' ' + boxClass}>{children}</div>;
};
