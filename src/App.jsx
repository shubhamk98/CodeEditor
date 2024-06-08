import { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const App = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-10">Code Editor</h1>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={15}
        className="bg-gray-100 focus:border w-[500px] m-auto h-[250px] overflow-scroll"
      />
    </div>
  );
};

export default App;

