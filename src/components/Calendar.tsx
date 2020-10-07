import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';

type CalendarType = {
  classes: {
    input: string,
  };
  placeholder?: string;
  value?: ParsableDate;
  onChange?: (value: any) => void;
};

const styled = (theme) => createStyles({
  input: {
    borderBottom: '0',
    textAlignLast: 'center',
    '&.MuiInput-underline:before': {
      display: 'none',
    },
    '&.MuiInput-underline:after': {
      display: 'none',
    },
    '&.MuiInput-colorSecondary': {
      display: 'none',
    },
    // '&.focused': {
    //   display: 'none',
    // },
    '&.Mui-focused': {
      borderBottom: '0',
    },
  },
});

const styledComponent = withStyles(styled);

function Calendar({ classes, value, ...rest }: CalendarType) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        {...rest}
        // open={startOpen}
        value={value}
        variant="inline"
        disableToolbar
        format="yyyy.MM.DD"
        margin="none"
        // inputVariant="outlined"
        id="date-picker-inline-1"
        // onChange={(value) => { setStartValue(value); setTimeout(() => setStartOpen(false)); }}
        // onClose={() => setTimeout(() => setStartOpen(false))}
        InputProps={{ className: classes.input }}
      />
    </MuiPickersUtilsProvider>
  );
}

Calendar.defaultProps = {
  placeholder: '날짜 선택',
  value: null,
  onChange: () => {},
};

export default styledComponent(Calendar);
