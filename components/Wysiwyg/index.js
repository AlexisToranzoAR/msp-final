import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import { grey } from "@mui/material/colors";

export default function Wysiwyg() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="toolbar"
        wrapperClassName="wrapper"
        editorClassName="editor"
      />

      <style jsx global>{`
        .toolbar {
          border: none;
          border-bottom: 1px solid ${grey[200]};
        }
        .wrapper {
          border-radius: 5px;
          border: 1px solid ${grey[200]};
        }
        .editor {
          min-height: 250px;
        }
      `}</style>
    </>
  );
}
