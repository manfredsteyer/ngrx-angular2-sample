///<reference path='../../node_modules/immutable/dist/immutable.d.ts'/>

import {Reducer, Action} from '@ngrx/store';
import {BoardingState} from './boarding.state';

export const BUCHUNGEN_LOADED = 'BUCHUNGEN_LOADED';
export const BUCHUNG_STATE_CHANGED = 'BUCHUNG_STATE_CHANGED';
export const BUCHUNG_UNDO = "BUCHUNG_UNDO";
export const BUCHUNG_REDO = "BUCHUNG_REDO";

export var initialBoardingState: BoardingState = {
    undoStack: [],
    redoStack: [],
    buchungen: [],
    message: "",
    statistik: {
        countBoarded: 0,
        countBooked: 0,
        countCheckedIn: 0
    }
};

function statusNumberToName(num) {
    
    switch(num) {
        case 0: return 'countBooked';
        case 1: return 'countCheckedIn';
        case 2: return 'countBoarded';
    }
}

function calcStatistic(buchungen: Array<any>) {
    var statistik = {
        countBoarded: 0,
        countBooked: 0,
        countCheckedIn: 0
    }
            
    for(var buchung of buchungen) {
        var statusName = statusNumberToName(buchung.buchungsStatus);
        statistik[statusName] = statistik[statusName] + 1; 
    }
    
    return statistik;
}

function buchungenLoaded(state: BoardingState, buchungen): BoardingState {

    return {
        undoStack: [...state.undoStack, state],
        redoStack: [],
        buchungen: buchungen,
        statistik: calcStatistic(buchungen),
        message: ""
    };
}

function buchungStateChanged(state: BoardingState, buchung): BoardingState {
    var idx = state.buchungen.findIndex(b => b.flugID == buchung.flugID && b.passagierID == buchung.passagierID);
    var newBuchungen = state.buchungen.slice(0);
    newBuchungen[idx] = buchung;     
                
    return {
        undoStack: [...state.undoStack, state],
        redoStack: [],
        buchungen: newBuchungen,
        statistik: calcStatistic(newBuchungen),
        message: ""
    };
}

function undo(state: BoardingState) {
    var oldState = state;
    var prevState = state.undoStack[state.undoStack.length-1];
    var newUndoStack = state.undoStack.slice(0, state.undoStack.length-1);
    
    return {
        undoStack: newUndoStack,
        redoStack: [...oldState.redoStack, oldState],
        buchungen: prevState.buchungen,
        message: prevState.message,
        statistik: prevState.statistik,
    }
}

function redo(state: BoardingState) {
    var oldState = state;
    var redoState = state.redoStack[state.redoStack.length-1];
    var newRedoStack = oldState.redoStack.slice(0, oldState.redoStack.length-1);
    
    return {
        undoStack: redoState.undoStack,
        redoStack: newRedoStack,
        message: redoState.message,
        buchungen: redoState.buchungen,
        statistik: redoState.statistik 
    }    
}

export const boardingReducer: Reducer<BoardingState> = (state: BoardingState, action:Action) => {
    switch (action.type) {
        case BUCHUNGEN_LOADED: return buchungenLoaded(state, action.payload);
        case BUCHUNG_STATE_CHANGED: return buchungStateChanged(state, action.payload);
        case BUCHUNG_UNDO: return undo(state);
        case BUCHUNG_REDO: return redo(state);
        default: return state;
    }
}