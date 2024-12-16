import type React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import monokai from "react-syntax-highlighter/dist/esm/styles/hljs/monokai";

SyntaxHighlighter.registerLanguage("typescript", typescript);

export const CodeBlock: React.FC<{ children: string | string[] }> = ({
  children,
}) => {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={monokai}
      customStyle={{ fontSize: "14px", padding: 0 }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
