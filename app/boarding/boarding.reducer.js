///<reference path='../../node_modules/immutable/dist/immutable.d.ts'/>
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BUCHUNGEN_LOADED, BUCHUNG_STATE_CHANGED, BUCHUNG_UNDO, BUCHUNG_REDO, initialBoardingState, boardingReducer;
    function statusNumberToName(num) {
        switch (num) {
            case 0: return 'countBooked';
            case 1: return 'countCheckedIn';
            case 2: return 'countBoarded';
        }
    }
    function calcStatistic(buchungen) {
        var statistik = {
            countBoarded: 0,
            countBooked: 0,
            countCheckedIn: 0
        };
        for (var _i = 0, buchungen_1 = buchungen; _i < buchungen_1.length; _i++) {
            var buchung = buchungen_1[_i];
            var statusName = statusNumberToName(buchung.buchungsStatus);
            statistik[statusName] = statistik[statusName] + 1;
        }
        return statistik;
    }
    function buchungenLoaded(state, buchungen) {
        return {
            undoStack: state.undoStack.concat([state]),
            redoStack: [],
            buchungen: buchungen,
            statistik: calcStatistic(buchungen),
            message: ""
        };
    }
    function buchungStateChanged(state, buchung) {
        var idx = state.buchungen.findIndex(function (b) { return b.flugID == buchung.flugID && b.passagierID == buchung.passagierID; });
        var newBuchungen = state.buchungen.slice(0);
        newBuchungen[idx] = buchung;
        return {
            undoStack: state.undoStack.concat([state]),
            redoStack: [],
            buchungen: newBuchungen,
            statistik: calcStatistic(newBuchungen),
            message: ""
        };
    }
    function undo(state) {
        var oldState = state;
        var prevState = state.undoStack[state.undoStack.length - 1];
        var newUndoStack = state.undoStack.slice(0, state.undoStack.length - 1);
        return {
            undoStack: newUndoStack,
            redoStack: oldState.redoStack.concat([oldState]),
            buchungen: prevState.buchungen,
            message: prevState.message,
            statistik: prevState.statistik,
        };
    }
    function redo(state) {
        var oldState = state;
        var redoState = state.redoStack[state.redoStack.length - 1];
        var newRedoStack = oldState.redoStack.slice(0, oldState.redoStack.length - 1);
        return {
            undoStack: redoState.undoStack,
            redoStack: newRedoStack,
            message: redoState.message,
            buchungen: redoState.buchungen,
            statistik: redoState.statistik
        };
    }
    return {
        setters:[],
        execute: function() {
            exports_1("BUCHUNGEN_LOADED", BUCHUNGEN_LOADED = 'BUCHUNGEN_LOADED');
            exports_1("BUCHUNG_STATE_CHANGED", BUCHUNG_STATE_CHANGED = 'BUCHUNG_STATE_CHANGED');
            exports_1("BUCHUNG_UNDO", BUCHUNG_UNDO = "BUCHUNG_UNDO");
            exports_1("BUCHUNG_REDO", BUCHUNG_REDO = "BUCHUNG_REDO");
            exports_1("initialBoardingState", initialBoardingState = {
                undoStack: [],
                redoStack: [],
                buchungen: [],
                message: "",
                statistik: {
                    countBoarded: 0,
                    countBooked: 0,
                    countCheckedIn: 0
                }
            });
            exports_1("boardingReducer", boardingReducer = function (state, action) {
                switch (action.type) {
                    case BUCHUNGEN_LOADED: return buchungenLoaded(state, action.payload);
                    case BUCHUNG_STATE_CHANGED: return buchungStateChanged(state, action.payload);
                    case BUCHUNG_UNDO: return undo(state);
                    case BUCHUNG_REDO: return redo(state);
                    default: return state;
                }
            });
        }
    }
});
//# sourceMappingURL=boarding.reducer.js.map