import React, { useMemo, useEffect, useState } from 'react';
import DeckCtx, { modes } from '../utils/DeckCtx';
import TimeModeCtx, { TIME_MODE } from '../utils/TimeModeCtx';
import Footer from './Footer';

// require('normalize.css/normalize.css');
// require('@blueprintjs/icons/lib/css/blueprint-icons.css');
// require('@blueprintjs/core/lib/css/blueprint.css');

const Provider = ({ children, index, length, mode, metadata, step, update }) => {
  const [isPrint, setIsPrint] = useState(false);
  const [timeMode, setTimeMode] = useState(TIME_MODE.normal);
  useEffect(() => {
    window.onbeforeprint = function() {
      setIsPrint(true);
    };
    window.onafterprint = function() {
      setIsPrint(false);
    };
  }, []);
  const ctxObj = useMemo(() => ({ index, length, mode, metadata, step, update, isPrint }), [
    index,
    length,
    mode,
    step,
    isPrint,
  ]);
  const timeCtxObj = useMemo(() => ({ timeMode, setTimeMode }), [timeMode, setTimeMode]);
  return (
    <TimeModeCtx.Provider value={timeCtxObj}>
      <DeckCtx.Provider value={ctxObj}>
        {children}
        <Footer />
      </DeckCtx.Provider>
    </TimeModeCtx.Provider>
  );
};

export default Provider;
