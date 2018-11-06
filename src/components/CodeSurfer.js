import * as React from 'react';
import { CodeSurfer } from 'mdx-deck-code-surfer';
import { Code } from 'mdx-deck';
import { registerLanguage } from 'react-syntax-highlighter/prism-light';
import typescript from 'react-syntax-highlighter/languages/prism/typescript';
import TimeModeCtx, { TIME_MODE } from '../utils/TimeModeCtx';
import { withDeck, updaters } from 'mdx-deck';

registerLanguage('typescript', typescript);

const Surfer = props => {
  const timeMode = React.useContext(TimeModeCtx);
  React.useEffect(
    () => {
      const { update, index } = props.deck;
      if (!props.neverFast && timeMode.timeMode === TIME_MODE.fast) {
        update(updaters.setSteps(index, 0));
      }
    },
    [timeMode.timeMode]
  );
  if (global.window) {
    const { fast, ...other } = props;
    return <CodeSurfer key={timeMode.timeMode} {...other} />;
  } else {
    return <Code className={'language-' + props.lang}>{props.code}</Code>;
  }
};

export default withDeck(Surfer);
