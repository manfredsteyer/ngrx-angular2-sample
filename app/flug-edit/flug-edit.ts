
import {RouteParams} from "angular2/router";
import {FlugService} from "../services/flug.service";
import {Component} from "angular2/core";

@Component({
    templateUrl: 'app/flug-edit/flug-edit.html'
})
export class FlugEdit {

    id: string;
    flug = {};
    error;
    message;

    constructor(private flugService: FlugService, params: RouteParams) {
        var id = params.get('id');
        this.id = id;

        flugService.findById(id).subscribe(
            (flug) => {
                this.flug = flug;
                this.error = "";
            },
            (err) => {
                console.error(err);
                this.error = "Fehler beim Laden!";
            }

        )
    }

    save() {
        this.flugService.save(this.flug).subscribe(

            (message) => {
                //this.message = message;
                this.error = "";
                this.message = "Flug wurde gespeichert!";
            },
            (err) => {
                console.error(err);
                this.error = err.text();
            }
        )
    }

    info = "Flug Detail";

}