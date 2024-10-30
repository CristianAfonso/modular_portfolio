import React from 'react';
import { CodeAreaModel } from '../models';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const CodeArea: React.FC<CodeAreaModel> = ({content, language}) => {

  return (
    <SyntaxHighlighter language={language} style={dark} className='code_area'>
        {content}
    </SyntaxHighlighter>
  );
};

export default CodeArea;