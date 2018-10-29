import React from 'react';
import styled from 'styled-components';
import Dots from './Dots';
import DeckCtx, { MODES } from '../utils/DeckCtx';

const Bottom = styled.div([], {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
});

const Footer = () => {
  const deckState = React.useContext(DeckCtx);

  if (deckState.mode !== MODES.normal) {
    return null;
  }

  return (
    <Bottom>
      <Dots
        mx="auto"
        mb={2}
        index={deckState.index}
        length={deckState.length}
        onClick={index => deckState.update({ index })}
      />
    </Bottom>
  );
};

export default Footer;
