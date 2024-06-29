import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';

const initialMarkdown = `# Heading 1
## Heading 2
[Link](https://example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App container mt-5">
      <div className="row">
        <div className="col-md-6 mb-3">
          <Editor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
        </div>
        <div className="col-md-6">
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
}

export default App;