import React from 'react';
import { h3, } from './styled';

const ID = 'h3Title';

export default function H3Title({ text, }) {
  return (
    <h3 id={ID}>
      {{ text, }}
    </h3>
  );
}
