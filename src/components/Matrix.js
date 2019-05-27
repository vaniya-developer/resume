
import React from 'react';
import Code from './Code';
import './Matrix.css';
import _ from 'lodash';

const CODE_LINES_COUNT = 100;

const Matrix = () => (
  <div className="Matrix">
    {_.times(CODE_LINES_COUNT).map((_, i) => 
    <Code key={i} />)}
  </div>
);

export default Matrix;
