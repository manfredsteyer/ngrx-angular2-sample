
import { Http, URLSearchParams, Headers } from 'angular2/http';
import { Injectable} from 'angular2/core';
import { Store} from '@ngrx/store';
import { BUCHUNGEN_LOADED } from './boarding.reducer';
import  * as Immutable from 'immutable';

@Injectable()
export class BoardingService {
    
    constructor(private http: Http, private store: Store<any> ) {
    }
    
    buchungen: Array<any> = [];
    error = "";
    
    public find(flugId) {
        
        var url = "http://www.angular.at/api/buchung";
        var search = new URLSearchParams();
        search.set('flugNummer', flugId);
        
        var headers = new Headers({
           'Accept': 'text/json' 
        });
        
        var that = this;
        
        this.http
            .get(url, { headers, search})
            .map(r => r.json())
            .subscribe(
                (buchungen) => {
                    
                    that.store.dispatch({ type: BUCHUNGEN_LOADED, payload: buchungen  });
                },
                (err) => {
                    console.debug(err);
                }  
            );
        
    }
    
}