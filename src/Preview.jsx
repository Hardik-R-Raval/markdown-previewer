import React from 'react';
import { marked } from 'marked';

function Preview({ markdown }) {
  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div>
      <h4 className="text-primary">Preview</h4>
      <div
        id="preview"
        dangerouslySetInnerHTML={createMarkup()}
        className="border p-3 bg-dark text-light border-secondary rounded overflow-auto"
        style={{ maxHeight: '60vh' }}
      />
    </div>
  );
}

export default Preview;