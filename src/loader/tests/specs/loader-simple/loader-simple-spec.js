/**
 * test loader
 * @author yiminghe@gmail.com
 */
/*jshint quotmark:false*/
/*global $*/
(function (S) {
    var d = S.Loader.Utils.normalizePath(window.location.href.replace(/[^/]*$/, ""),
        "../specs/loader-simple");
    var run = function (combine) {
        describe("loader-simple " + (combine ? 'at combo mode' : ''), function () {
            beforeEach(function () {
                KISSY.config('combine', !!combine);
            });

            afterEach(function () {
                KISSY.clearLoader();
            });

            describe('kissy.require', function () {
                it('not to attach', function () {
                    var runned = 0;
                    S.add('z', ['d'], function (S, require) {
                        require('d');
                        runned = 1;
                        return 1;
                    });
                    expect(S.require('z')).toBe(undefined);
                    expect(runned).toBe(0);
                });
            });

            it("should load and attach custom mods correctly", function () {
                KISSY.config({
                    packages: {
                        "1.2": {
                            tag: S.Loader.Utils.now(),
                            base: d + '/1.2' //包对应路径，相对路径指相对于当前页面路径
                        }
                    }
                });

                $(document.body).append("<div id='k11x'/>");
                $(document.body).append("<div id='k12'/>");

                var ok = false;

                S.use("1.2/mod", function (S, Mod) {
                    ok = true;
                    expect(Mod).toBe(2);
                    expect(S.require('1.2/mod')).toBe(Mod);
                    var mod12;
                    var flag = S.config('combine') ? "1.2/??mod.js" : "1.2/mod.js";
                    var scripts = document.getElementsByTagName("script");
                    for (var i = 0; i < scripts.length; i++) {
                        var script = scripts[i];
                        if (script.src.indexOf(flag) > -1) {
                            mod12 = script;
                            break;
                        }
                    }
                    expect(mod12.async).toBe(true);
                    expect(mod12.charset).toBe("utf-8");
                    expect($("#k12").css('width')).toBe('111px');

                });

                waitsFor(function () {
                    return ok;
                }, "1.2/mod never loaded");
            });
        });
    };
    run();
    run(1);
})(KISSY);

