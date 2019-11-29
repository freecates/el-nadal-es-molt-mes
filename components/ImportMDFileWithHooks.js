import fetch from 'isomorphic-unfetch';
import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';

export default function ImportMDFileWithHooks(props) {
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');

  useEffect(() => {
    async function updateContentFromFileName(fileName) {
      const res = await fetch(`https://nadalesmoltmesdata.now.sh/${fileName}`);
      const filename = fileName;
      const content = await res.text();
      setContent(content);
      setFilename(filename);
    }
    updateContentFromFileName(props.file);
  }, [props.file]);

  return (
    <React.Fragment>
      {filename.includes('.html') ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <Markdown>{content}</Markdown>
      )}
    </React.Fragment>
  );
}
