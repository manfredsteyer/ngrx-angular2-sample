import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { BoardingService} from './boarding.service';
import { Store} from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import { BUCHUNG_STATE_CHANGED, BUCHUNG_UNDO, BUCHUNG_REDO } from './boarding.reducer';
import { BoardingState, AppState, BoardingStatistic } from './boarding.state';
import { BuchungsStatusPipe} from './buchungs-status.pipe';
import { BuchungsStatusFarbePipe} from './buchungs-status-farbe.pipe';


@Component({
    templateUrl: 'app/boarding/boarding.component.html',
    providers: [BoardingService],
    pipes: [BuchungsStatusPipe, BuchungsStatusFarbePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardingComponent {

    constructor(private boardingService: BoardingService, private store: Store<AppState>) {
    }
    
    statistik: Observable<BoardingStatistic>;
    
    ngOnInit() {
        this.boardingService.find(1);         
        this.statistik = this.store.select(s => s.boarding.statistik);
    }
    
    get buchungen() {
        return this.store.select(s => s.boarding.buchungen);
    }
    
    get message() {
      return this.store.select(s => s.boarding.message);
    }
    
    get countBoarded() {
        return this.statistik.map(s => s.countBoarded);
    }

    get countBooked() {
        return this.statistik.map(s => s.countBooked);
    }

    get countCheckedIn() {
        return this.statistik.map(s => s.countCheckedIn);
    }
    
    get undoDisabled() {
        return this.store.select(s => s.boarding.undoStack).map(s => s.length <= 1);
    }

    get redoDisabled() {
        return this.store.select(s => s.boarding.redoStack).map(s => s.length == 0);
    }

    public changeState(buchung, state) {
        if (buchung.buchungsStatus == state) return;
        var newBuchung = Object.assign({}, buchung, {buchungsStatus: state});
        this.store.dispatch({ type: BUCHUNG_STATE_CHANGED, payload: newBuchung });
    }
    
    public undo() {
        this.store.dispatch({ type: BUCHUNG_UNDO });
    }
    
    public redo() {
        this.store.dispatch({ type: BUCHUNG_REDO });
    }

}