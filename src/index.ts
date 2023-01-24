import {schema} from "prosemirror-schema-basic";
import {EditorState} from "prosemirror-state";
import {EditorView} from "prosemirror-view";

document.addEventListener('DOMContentLoaded', () => {
  let state = EditorState.create({schema});
  let view = new EditorView(document.body, {state});
});