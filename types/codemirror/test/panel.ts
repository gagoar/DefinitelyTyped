/// <reference types="../../codemirror/codemirror-panel" />
var cm: CodeMirror.Editor = CodeMirror(document.body);

var panel1 = cm.addPanel(document.body);

var panel2: CodeMirror.Panel = cm.addPanel(document.body, {
    position: "top",
    after: panel1,
    before: panel1,
    replace: panel1,
    stable: true
});

panel2.changed();
panel2.changed(100);

panel2.clear();
