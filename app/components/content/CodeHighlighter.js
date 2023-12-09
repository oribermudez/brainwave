import { Highlight, themes } from "prism-react-renderer";

const CodeHighlighter = ({ codeBlock }) => {
  //jettwaveDark
  //nightOwl
  //okaidia
  //shadesOfPurple
  //vsDark

  return (
    <Highlight theme={themes.vsDark} code={codeBlock} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`w-full rounded-md border-l-4 border-blue-100 ${className}`} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeHighlighter;
