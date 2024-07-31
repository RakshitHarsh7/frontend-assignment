import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomTextEditor = () => {
  const [text, setText] = useState("");

  const handleSave = () => {
    console.log("Saved text:", text);
  };

  const handleVariables = () => {
    console.log("Variables action");
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        ['link', 'image'],
        [{ 'align': [] }],
        ['clean'],
        ['save', 'variables'] // Add custom buttons here
      ],
      handlers: {
        'save': handleSave,
        'variables': handleVariables
      }
    }
  };

  return (
    <ReactQuill
      value={text}
      onChange={setText}
      modules={modules}
      formats={['header', 'font', 'list', 'bold', 'italic', 'underline', 'link', 'image', 'align']}
    />
  );
};

export default CustomTextEditor;
