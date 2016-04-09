import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'buchungsStatusFarbe',
    pure: true
})
export class BuchungsStatusFarbePipe implements PipeTransform {
    
    transform(value: any, args: any[]): any {
        
        switch(value) {
            case 0: return "red";
            case 1: return "orange";
            case 2: return "green";
        }
        return "black";
    }
}