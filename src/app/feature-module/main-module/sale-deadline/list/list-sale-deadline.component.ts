
import { SaleDeadlineService } from './../../../../core/http-services/sale-deadline.service';
import { BaseComponent } from 'src/app/feature-module/base.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SaleDeadlineModel } from 'src/app/core/models/sale-deadline.model';

@Component({
    selector: 'app-list-sale-deadline',
    templateUrl: './list-sale-deadline.component.html'
})
export class ListSaleDeadlineComponent extends BaseComponent implements OnInit {

  list: Array<SaleDeadlineModel> = [];
  constructor(private service: SaleDeadlineService) {
super();
  }

   ngOnInit(): void {
    this.list = this.service.getSaleDeadline();
  }

}
