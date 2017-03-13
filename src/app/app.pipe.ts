import { Pipe } from '@angular/core';

@Pipe({
    name: 'FilterNumber',
    pure: false
})

export class FilterNumberPipe {
    transform(value) {
        return value/100;
    }
}