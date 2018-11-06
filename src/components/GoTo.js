import React from 'react';
import { withDeck, updaters, constants } from 'mdx-deck';
import DeckCtx from '../utils/DeckCtx';
import TimeModeCtx from '../utils/TimeModeCtx';

console.log(updaters);

const GoTo = props => {
  const timeMode = React.useContext(TimeModeCtx);
  return (
    <DeckCtx.Consumer>
      {deckState => {
        const { step, mode, index, update } = props.deck;
        return props.children({
          update: updater => {
            update(updater);
          },
          setTimeMode: timeMode.setTimeMode,
        });
      }}
    </DeckCtx.Consumer>
  );
};

export default withDeck(GoTo);
