import {Http} from "angular2/http";
import {Headers} from "angular2/http";
import {URLSearchParams} from "angular2/http";
import {Injectable} from "angular2/core";
import {Inject} from "angular2/core";

@Injectable()
export class FlugService {

    constructor(private http: Http,
                @Inject('BASE_URL') private baseUrl: string) {
    }

    public fluege: Array<any>;
    public error: string;


    public findById(id: string) {

        var headers = new Headers();
        headers.set('Accept', 'text/json');

        var search = new URLSearchParams();
        search.set('flugNummer', id);

        var url = this.baseUrl + "/flug";

        return this
                .http
                .get(url, { search, headers })
                .map(response => response.json());
    }


    public save(flug) {

        var headers = new Headers();
        headers.set('Content-Type', 'text/json');

        var url = this.baseUrl + "/flug";

        return this
            .http
            .post(url, JSON.stringify(flug), { headers })
            .map(response => response.text());
    }

    public find(von: string, nach: string) {

        var headers = new Headers();
        headers.set('Accept', 'text/json');

        var search = new URLSearchParams();
        search.set('abflugort', von);
        search.set('zielort', nach);

        var url = this.baseUrl + "/flug";

        return this
                .http
                .get(url, { search, headers })
                .map(response => response.json())
                .subscribe(
                    (fluege) => {
                        this.fluege = fluege;
                        this.error = "";
                    },
                    (err) => {
                        this.error = err;
                    }
                )
    }

}