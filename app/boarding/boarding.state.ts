
export interface AppState {
    boarding: BoardingState;
    
    // ... hier könnten weitere Eigenschaften ...
    // ... für weitere Teile der Anwendung ...
    // ... definiert sein ... 
}

export interface BoardingState {
    undoStack: Array<BoardingState>;
    redoStack: Array<BoardingState>;
    buchungen: Array<any>,
    message: string,
    statistik: BoardingStatistic;
}

export interface BoardingStatistic {
    countBoarded: number;
    countCheckedIn: number;
    countBooked: number;
}