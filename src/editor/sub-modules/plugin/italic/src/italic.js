/**
 * @ignore
 * italic button.
 * @author yiminghe@gmail.com
 */
KISSY.add(function (S, require) {
    var ui = require('./font/ui');
    var cmd = require('./italic/cmd');
    require('./button');
    var Node = require('node');
    function Italic() {

    }

    (Italic.prototype = {
        pluginRenderUI: function (editor) {
            cmd.init(editor);

            editor.addButton('italic', {
                cmdType: 'italic',
                tooltip: '斜体'
            }, ui.Button);

            editor.docReady(function () {
                editor.get('document').on('keydown', function (e) {
                    if (e.ctrlKey && e.keyCode === Node.KeyCode.I) {
                        editor.execCommand('italic');
                        e.preventDefault();
                    }
                });
            });
        }
    });

    return Italic;
});