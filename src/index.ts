import {schema} from "prosemirror-schema-basic";
import {EditorState} from "prosemirror-state";
import {EditorView} from "prosemirror-view";

let state: EditorState;
let view: EditorView;

document.addEventListener('DOMContentLoaded', () => {
  state = EditorState.create({schema});
  view = new EditorView(document.body, {
    state,
    dispatchTransaction(tr) {
      console.log(
        "Document size went from", tr.before.content.size,
        "to", tr.doc.content.size,
      )
      let newState = view.state.apply(tr);
      view.updateState(newState);
    },
  });
});