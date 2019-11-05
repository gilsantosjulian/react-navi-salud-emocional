import React from 'react';
import PropTypes from 'prop-types';
import { H3, } from './styled';

const ID = 'h3';

export default function H3Title(props) {
  const { text, } = props; 
  return (
    <H3 id={ID}>
      { text }
    </H3>
  );
}

H3Title.propTypes = {
  text: PropTypes.string.isRequired,
};
