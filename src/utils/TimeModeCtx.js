import { createContext } from 'react';

export const TIME_MODE = {
  fast: 'fast',
  normal: 'normal',
};

const TimeModeCtx = createContext();

export default TimeModeCtx;
