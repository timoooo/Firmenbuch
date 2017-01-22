import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Company} from "../entities/company";

@Component({
    templateUrl: './company-card.component.html',
    selector: 'company-card'
})
export class CompanyCardComponent {

    @Input() item: Company;
    @Input() selectedItem: Company;
    @Output() selectedItemChange = new EventEmitter();

    select() {
        this.selectedItemChange.next(this.item);
    }
}