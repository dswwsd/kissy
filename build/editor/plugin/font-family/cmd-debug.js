/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: May 14 22:19
*/
/*
combined modules:
editor/plugin/font-family/cmd
*/
/**
 * @ignore
 * fontFamily command.
 * @author yiminghe@gmail.com
 */
KISSY.add('editor/plugin/font-family/cmd', ['../font/cmd'], function (S, require) {
    var Cmd = require('../font/cmd');
    var fontFamilyStyle = {
            element: 'span',
            styles: { 'font-family': '#(value)' },
            overrides: [{
                    element: 'font',
                    attributes: { 'face': null }
                }]
        };
    return {
        init: function (editor) {
            Cmd.addSelectCmd(editor, 'fontFamily', fontFamilyStyle);
        }
    };
});
