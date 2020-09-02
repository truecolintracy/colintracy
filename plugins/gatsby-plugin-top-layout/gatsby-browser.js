/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export, react/prop-types */

import React from 'react';
import TopLayout from './TopLayout';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};

