/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: May 14 22:17
*/
KISSY.add("editor/plugin/bold/cmd",["editor","../font/cmd"],function(e,a){var b=a("editor"),c=a("../font/cmd"),d=new b.Style({element:"strong",overrides:[{element:"b"},{element:"span",attributes:{style:"font-weight: bold;"}}]});return{init:function(a){c.addButtonCmd(a,"bold",d)}}});
