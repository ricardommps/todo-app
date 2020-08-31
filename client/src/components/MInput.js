import React, { memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cssLabel: {
    '&$cssFocused': {
      color: theme.palette.primary,
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:before': {
      borderBottomColor: theme.input.underline,
    },
    '&:hover:not($disabled):before,&:before': {
      borderColor: `${theme.input.underline} !important`,
      borderWidth: '1px !important',
    },
    '&:after': {
      borderBottomColor: theme.palette.primary,
    },
  },
}));

export const MInput = memo(
  ({ floating = true, mFormControlProps, mInputLabelProps, mInputProps }) => {
    const classes = useStyles();
    return (
      <FormControl {...mFormControlProps}>
        {floating && (
          <InputLabel
            htmlFor="standard-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            {...mInputLabelProps}
          >
            {mInputLabelProps && mInputLabelProps.children}
          </InputLabel>
        )}
        <Input
          id="standard-input"
          classes={{
            underline: classes.cssUnderline,
          }}
          {...mInputProps}
        />
      </FormControl>
    );
  }
);
