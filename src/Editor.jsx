import React from 'react';

function Editor({ markdown, onMarkdownChange }) {
  return (
    <div className="form-group">
      <label htmlFor="editor" className="text-primary"><h4>Markdown Editor</h4></label>
      <textarea
        id="editor"
        className="form-control bg-dark text-light border-secondary"
        value={markdown}
        onChange={onMarkdownChange}
        rows="10"
      />
    </div>
  );
}

export default Editor;