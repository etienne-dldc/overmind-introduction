import deck from './index.mdx';
export { default as theme } from './theme';

import { registerLanguage } from 'react-syntax-highlighter/prism-light';
import typescript from 'react-syntax-highlighter/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/languages/prism/tsx';

registerLanguage('typescript', typescript);
registerLanguage('tsx', tsx);

import imgDevtool1 from './images/devtool-01.png';
import imgDevtool2 from './images/devtool-02.png';
import imgDevtool3 from './images/devtool-03.png';

if (global.window) {
  const preloader = require('preloader');
  const loader = preloader({
    xhrImages: false,
  });

  loader.add(imgDevtool1);
  loader.add(imgDevtool2);
  loader.add(imgDevtool3);

  loader.load();
}

export default [...deck];
