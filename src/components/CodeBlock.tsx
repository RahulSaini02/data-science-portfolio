"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa6";
import { useState } from "react";

interface CodeType {
  value: {
    code: string;
    language: string;
  };
}

const CodeBlock = ({ value }: CodeType) => {
  const [copied, setCopied] = useState(false);
  const { code, language } = value;

  const handleCopy = () => {
    navigator.clipboard.writeText(value.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 text-sm rounded flex items-center"
      >
        {copied ? (
          <>
            <FaClipboardCheck className="h-4 w-4 mr-1" /> Copied
          </>
        ) : (
          <>
            <FaClipboard className="h-4 w-4 mr-1" /> Copy
          </>
        )}
      </button>

      <SyntaxHighlighter
        showLineNumbers={true}
        showInlineLineNumbers={true}
        language={language}
        style={oneDark}
        customStyle={{
          padding: "1em",
          marginBottom: "2em",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
