import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
  Hidden
} from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
  root: {},
  summaryButton: {
    backgroundColor: theme.palette.common.white
  },
  barChartIcon: {
    marginRight: theme.spacing(1)
  },
  image: {
    width: '100%',
    maxHeight: 400
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const session = useSelector((state) => state.session);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            God morgen,
            {' '}
            {session.user.first_name}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
