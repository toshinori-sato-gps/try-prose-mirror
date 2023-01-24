import {schema} from "prosemirror-schema-basic";
import {EditorState} from "prosemirror-state";
import {EditorView} from "prosemirror-view";
import {undo, redo, history} from "prosemirror-history"
import {keymap} from "prosemirror-keymap"

let state: EditorState;
let view: EditorView;

document.addEventListener('DOMContentLoaded', () => {
  state = EditorState.create({
    schema,
    plugins: [
      history(),
      keymap({"Mod-z": undo, "Mod-shift-z": redo}),
    ],
  });

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