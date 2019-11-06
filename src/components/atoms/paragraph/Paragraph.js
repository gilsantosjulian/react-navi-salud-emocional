import React from 'react';
import PropTypes from 'prop-types';
import { P, } from './styled';

const ID = 'paragraph';

export default function Paragraph(props) {
  const { text, } = props; 
  return (
    <P id={ID}>
      { text }
    </P>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};
