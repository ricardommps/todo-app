import React, { memo, useState } from 'react';
import ViewListSharp from '@material-ui/icons/ViewListSharp';
import { Grid, List, Typography, makeStyles, Divider, Box } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { SectionCard, TodoRow, CardIcon } from './';

const useStyles = makeStyles(theme => ({
  layout: {
    marginTop: 30,
  },
  headerSvgIconStyle: {
    width: 42,
    height: 38,
  },
  paginator: {
    justifyContent: 'center',
    padding: '10px',
  },
}));

const IconComponent = ({ classIcon }) => (
  <CardIcon active={true}>
    <ViewListSharp className={classIcon} />
  </CardIcon>
);

export const ActiveTodoList = memo(
  ({ updateActionsProp, deleteProp, todoList, actions, update, theme }) => {
    const classes = useStyles();
    const itemsPerPage = 5;
    const [page, setPage] = useState(1);
    const noOfPages = Math.ceil(todoList?.length / itemsPerPage);
    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
      <Grid
        container={true}
        direction={'row'}
        alignContent={'center'}
        justify={'center'}
        className={classes.layout}
      >
        <SectionCard
          cardIcon={<IconComponent classIcon={classes.headerSvgIconStyle} />}
          label={'TO-DO LIST'}
        >
          {todoList?.length === 0 ? (
            <Grid item={true} xs={12}>
              <Typography
                align={'center'}
                variant="body1"
                color="textSecondary"
                gutterBottom={true}
              >
                No active to do found !
              </Typography>
            </Grid>
          ) : (
            <Grid container={true} style={{ marginTop: '-10px' }}>
              <Grid item={true} xs={12}>
                <List disablePadding={true}>
                  {todoList
                    ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((todoObj, index) => (
                      <TodoRow
                        todo={todoObj}
                        key={todoObj.id}
                        actionProps={actions}
                        updateItem={update}
                        updateActions={updateActionsProp}
                        deleteItem={deleteProp}
                      />
                    ))}
                </List>
                <Divider />
                <Box component="span">
                  <Pagination
                    count={noOfPages}
                    page={page}
                    onChange={handleChange}
                    defaultPage={1}
                    color="primary"
                    size="large"
                    classes={{ ul: classes.paginator }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </SectionCard>
      </Grid>
    );
  }
);
