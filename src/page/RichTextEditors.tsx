import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles for the editor

const RichTextEditor: React.FC = () => {
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const savedEditorHtml = localStorage.getItem("editorHtml");
    if (savedEditorHtml) {
      setEditorHtml(savedEditorHtml);
    }
    setIsLoaded(true);
  }, []);

  const handleEditorChange = (html: string) => {
    setEditorHtml(html);
  };

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("editorHtml", editorHtml);
    }
  }, [editorHtml, isLoaded]);

  return (
    <div className=" h-50 p-5">
      <div className=" sha">
        <ReactQuill
          value={editorHtml}
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
          className=" h-100  "
        />
      </div>
    </div>
  );
};

// Customize modules and formats as needed
const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = ["bold", "italic", "underline", "list"];

export default RichTextEditor;
