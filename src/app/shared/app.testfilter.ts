import { Pipe, PipeTransform } from "@angular/core";
import { student } from "../model/student";

@Pipe({
    name: 'stdFilter'
})
export class TextFilter implements PipeTransform {
    transform(items: student[], filter: any) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) != -1)
    }

}