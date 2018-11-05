import * as React from 'react';
import { CodeSurfer } from 'mdx-deck-code-surfer';
import { Code } from 'mdx-deck';
import { registerLanguage } from 'react-syntax-highlighter/prism-light';
import typescript from 'react-syntax-highlighter/languages/prism/typescript';

registerLanguage('typescript', typescript);

const Surfer = global.window ? CodeSurfer : ({ lang, code }) => <Code className={'language-' + lang}>{code}</Code>;

export default Surfer;
