import AppConst from "shared/AppConst";

const CONSOLE_LOG = AppConst.CONSOLE_LOG;

const ready = () => {
    if (!CONSOLE_LOG) {
        const consoleSubstitute = console;
        console = {
            assert: function () {
                if (console.active && console.doAssert) {
                    consoleSubstitute.assert.apply(null, arguments);
                }
            },
            clear: function () {
                if (console.active && console.doClear) {
                    consoleSubstitute.clear();
                }
            },
            count: function () {
                if (console.active && console.doCount) {
                    consoleSubstitute.count.apply(null, arguments);
                }
            },
            countReset: function () {
                if (console.active && console.doCountReset) {
                    consoleSubstitute.countReset.apply(null, arguments);
                }
            },
            debug: function () {
                if (console.active && console.doDebug) {
                    consoleSubstitute.debug.apply(null, arguments);
                }
            },
            dir: function () {
                if (console.active && console.doDir) {
                    consoleSubstitute.dir.apply(null, arguments);
                }
            },
            dirxml: function () {
                if (console.active && console.doDirxml) {
                    consoleSubstitute.dirxml.apply(null, arguments);
                }
            },
            error: function () {
                if (console.active && console.doError) {
                    consoleSubstitute.error.apply(null, arguments);
                }
            },
            group: function () {
                if (console.active && console.doGroup) {
                    consoleSubstitute.group.apply(null, arguments);
                }
            },
            groupCollapsed: function () {
                if (console.active && console.doGroup) {
                    consoleSubstitute.groupCollapsed.apply(null, arguments);
                }
            },
            groupEnd: function () {
                if (console.active && console.doGroup) {
                    consoleSubstitute.groupEnd.apply(null, arguments);
                }
            },
            info: function () {
                if (console.active && console.doInfo) {
                    consoleSubstitute.info.apply(null, arguments);
                }
            },
            log: function () {
                if (console.active && console.doLog) {
                    if (console.doLogTrace) {
                        console.groupCollapsed(arguments);
                        consoleSubstitute.trace.apply(null, arguments);
                        console.groupEnd();
                    } else {
                        consoleSubstitute.log.apply(null, arguments);
                    }
                }
            },
            table: function () {
                if (console.active && console.doTable) {
                    consoleSubstitute.table.apply(null, arguments);
                }
            },
            time: function () {
                if (console.active && console.doTime) {
                    consoleSubstitute.time.apply(null, arguments);
                }
            },
            timeEnd: function () {
                if (console.active && console.doTime) {
                    consoleSubstitute.timeEnd.apply(null, arguments);
                }
            },
            timeLog: function () {
                if (console.active && console.doTime) {
                    consoleSubstitute.timeLog.apply(null, arguments);
                }
            },
            trace: function () {
                if (console.active && console.doTrace) {
                    consoleSubstitute.trace.apply(null, arguments);
                }
            },
            warn: function () {
                if (console.active && console.doWarn) {
                    consoleSubstitute.warn.apply(null, arguments);
                }
            },
            active: false,
            doAssert: true,
            doClear: true,
            doCount: true,
            doCountReset: true,
            doDebug: true,
            doDir: true,
            doDirxml: true,
            doError: true,
            doGroup: true,
            doInfo: true,
            doLog: true,
            doLogTrace: true,
            doTable: true,
            doTime: true,
            doTrace: true,
            doWarn: true
        };
    }
}

const exportConsoleLog = {
    ready: ready
}

export default exportConsoleLog;