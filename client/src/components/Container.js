import { Grid, makeStyles } from '@material-ui/core';
import React, { memo } from 'react';

const useStyles = makeStyles(theme => ({
  layout: {
    margin: '16',
    marginTop: '80px',
    padding: 16,
  },
}));

export const Container = memo(({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.layout}
      container={true}
      direction="row"
      justify="center"
      alignItems="center"
      spacing={32}
    >
      {children}
    </Grid>
  );
});
