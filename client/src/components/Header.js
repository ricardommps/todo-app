import React, { memo } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header = memo(() => (
  <div style={{ flexGrow: 1 }}>
    <AppBar style={{ alignItems: 'center' }}>
      <Toolbar>
        <Typography component="h6" variant="h6" color="inherit" align="center">
          To-Do App
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
));
