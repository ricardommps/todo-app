import React, { memo } from 'react';
import { Divider, Grid, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: { marginTop: 30, padding: 16, paddingRight: 20 },
  cardHeaderLabel: {
    fontSize: '1rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: '0.8',
  },
  svgIcon: {
    width: 46,
    height: 42,
  },
  divider: { marginTop: 25, marginBottom: 10 },
}));

export const SectionCard = memo(({ label, cardIcon, children }) => {
  const classes = useStyles();
  return (
    <Grid item={true} xs={12} sm={8} md={6}>
      <Paper className={classes.card}>
        <Grid container={true} direction={'row'} />
        {cardIcon}
        <Typography className={classes.cardHeaderLabel} component="h6" color="textSecondary">
          {label}
        </Typography>
        <Divider className={classes.divider} />
        <Grid container={true}>{children}</Grid>
      </Paper>
    </Grid>
  );
});
