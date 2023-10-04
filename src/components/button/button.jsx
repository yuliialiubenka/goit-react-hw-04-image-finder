import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './buttonStyles';

const Button = ({ onClick }) => {
  const classes = useStyles();
  return (
      <button className={classes.loadMoreBtn} type="button" onClick={onClick}>
        Load more
      </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;