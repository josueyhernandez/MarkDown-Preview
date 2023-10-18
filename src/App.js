import { useState } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';

/* 
 a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
*/
function App() {
  const [text, setText] = useState(`
  # Welcome to My React Markdown Preview
  ## By: Josue Hernandez
  ---
  LinkedIn Url: [LinkedIn](www.linkedin.com/in/josue-hernandez-nunez)

  \`<div>Hello World!!</div>\`
  \`\`\`
  {
    "firstName": "Josue",
    "lastName": "Hernandez",
    "age": 22,
    "favColor": "Black"
  }
  \`\`\`

  ---

  **Programming Languages that I know are:**
  > (React is not a programming language, its a framework)
  - HTML
  - CSS
  - JavaScript

  **This is a JavaScript Logo:**

  ![JavaScript Logo](https://cms.azure.styava.dev/api/assets/styavacommunities/092f9741-4c89-4cd4-aac9-9b3ca76a2bf5/javascript-39395.png)
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div class="title">
      <i class="bi bi-fire"></i>
        <h5 class="name">Editor</h5>
        <i class="bi bi-arrows-angle-expand"></i>
      </div>
      <textarea id="editor" cols={70} onChange={(event) => {
        setText(event.target.value)
      }}
      value={text}></textarea>
      <div class="title other">
      <i class="bi bi-fire"></i>
        <h5 class="name">Preview</h5>
        <i class="bi bi-arrows-angle-expand"></i>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(text)
      }}></div>
    </div>  
  );  
}

export default App;
