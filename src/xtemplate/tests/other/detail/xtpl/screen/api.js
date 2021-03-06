/** Compiled By kissy-xtemplate */
KISSY.add(function (S, require, exports, module) {
        /*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true, sub:true*/
        var api = function (scope, buffer, undefined) {
            var tpl = this,
                nativeCommands = tpl.root.nativeCommands,
                utils = tpl.root.utils;
            var callFnUtil = utils["callFn"],
                callCommandUtil = utils["callCommand"],
                eachCommand = nativeCommands["each"],
                withCommand = nativeCommands["with"],
                ifCommand = nativeCommands["if"],
                setCommand = nativeCommands["set"],
                includeCommand = nativeCommands["include"],
                parseCommand = nativeCommands["parse"],
                extendCommand = nativeCommands["extend"],
                blockCommand = nativeCommands["block"],
                macroCommand = nativeCommands["macro"],
                debuggerCommand = nativeCommands["debugger"];
            buffer.write('<!doctype html>\r\n\r\n<html>\r\n<head>\r\n    <title>API Documentation</title>\r\n    <style type="text/css">\r\n        .toctree-wrapper  ul{\r\n            list-style: none;\r\n            margin:0 0 0 20px;\r\n        }\r\n\r\n        .toctree-wrapper  ul li{\r\n            list-style: none;\r\n            margin:0 0  5px 0;\r\n        }\r\n\r\n        .toctree-wrapper  ul li a{\r\n            font-size:14px;\r\n            color:rgb(19, 100, 196);\r\n        }\r\n        ul li .collapsed,  ul li .expanded{\r\n            float:left;\r\n            width:17px;\r\n            height:17px;\r\n            background-image:url(\'http://gtms01.alicdn.com/tps/i1/T1zNTDFj0fXXcSRtsq-1828-52.png\');\r\n            cursor:pointer;\r\n        }\r\n\r\n        ul li .collapsed{\r\n            background-position:-329px -3px;\r\n        }\r\n\r\n        ul li .expanded{\r\n            background-position:-352px -3px;\r\n        }\r\n    </style>\r\n    <script src="http://a.tbcdn.cn/s/kissy/1.3.0/kissy.js"></script>\r\n    <script type="text/javascript">\r\n        KISSY.use("sizzle", function(S){\r\n            var $=S.all;\r\n            $(".toctree-wrapper a").each(function(item){\r\n                if($(item).parent().all("ul").length>0){\r\n                    var handler = $(\'<s class="collapsed"></s>\');\r\n                    handler.insertBefore(item);\r\n                    $(item).parent().all("ul").hide();\r\n                }\r\n            });\r\n            $(".toctree-wrapper").delegate("click","s",function(ev){\r\n                var tg = $(ev.currentTarget);\r\n                if(tg.hasClass("collapsed")){\r\n                    tg.parent().all("ul").show(.3);\r\n                    tg.addClass("expanded").removeClass("collapsed");\r\n                }else{\r\n                    tg.parent().all("ul").hide(.3);\r\n                    tg.removeClass("expanded").addClass("collapsed");\r\n                }\r\n            })\r\n        })\r\n    </script>\r\n</head>\r\n<body>\r\n<div class="section" id="api-documentation">\r\n    <div class="body">\r\n        <div class="section" id="api-documentation">\r\n            <span id="api"></span><h1>Detail Modulet API Documentation</h1>\r\n            <div class="toctree-wrapper compound">\r\n                <ul>\r\n                    #foreach($api in $apis)\r\n                    <li class="toctree-l1">\r\n                        <a class="reference internal" href="seed/index.html"><B>${api.name}</a></B>${api.desc}\r\n                        <ul>\r\n                            #set($dataDesc = $api.moduletDesc.getReturnClassDesc())\r\n                            #foreach($fd in $dataDesc.getFieldsDesc())\r\n                            $control.setTemplate(\'apiDesc.vm\').setParameter(\'fd\',$fd)\r\n                            #end\r\n                        </ul>\r\n                    </li>\r\n                    #end\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</body>\r\n</html>', 0);
            return buffer;
        };
api.TPL_NAME = module.name;
api.version = "5.0.0";
return api
});