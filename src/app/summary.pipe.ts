import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name :'summary'
})
export class summaryPipe implements PipeTransform {
    transform(value: string, limit : number =50) : string { 
        return value.slice(0, 20).concat('...')
    }

}