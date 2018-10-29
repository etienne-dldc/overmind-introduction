import React, { useMemo } from 'react';
import DeckCtx, { modes } from '../utils/DeckCtx';
import Footer from './Footer';

const Provider = ({ children, index, length, mode, metadata, step, update }) => {
  const ctxObj = useMemo(() => ({ index, length, mode, metadata, step, update }), [index, length, mode, step]);
  return (
    <DeckCtx.Provider value={ctxObj}>
      {children}
      <Footer />
    </DeckCtx.Provider>
  );
};

export default Provider;
