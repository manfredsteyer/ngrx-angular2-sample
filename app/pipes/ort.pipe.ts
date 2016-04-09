import {PipeTransform} from "angular2/core";
import {Pipe} from "angular2/core";

@Pipe({
    name: 'ort',
    pure: true
})
export class OrtPipe implements PipeTransform {

    transform(value:any, args:any[]):any {

        var fmt = args[0]; // short oder long
        var short, long;

        switch(value) {

            case "Hamburg":
                short = "HAM";
                long = "Hamburg Airport";
                break;
            case "Graz":
                short = "GRZ";
                long = "Flughafen Graz-Thalerhof";
                break;
            default:
                short = long = "ROM";
        }

        if (fmt == 'short') return short;
        return long;
    }


}