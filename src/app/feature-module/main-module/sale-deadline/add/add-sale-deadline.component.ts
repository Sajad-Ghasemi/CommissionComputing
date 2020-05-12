import { SaleDeadlineService } from './../../../../core/http-services/sale-deadline.service';
import { BaseComponent } from 'src/app/feature-module/base.component';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SaleDeadlineModel } from 'src/app/core/models/sale-deadline.model';

@Component({
    selector: 'app-sale-deadline',
    templateUrl: './add-sale-deadline.component.html'
})
export class AddSaleDeadlineComponent extends BaseComponent {

  constructor(private fb: FormBuilder, private service: SaleDeadlineService){
super();
  }

  form = this.fb.group({
startDate: [''],
endDate: [''],
ddlSaleType: [''],
deadlineDay: ['']

  });

  onSubmit()
  {
    let saleDeadline: SaleDeadlineModel = {
      DayDeadline: this.form.controls['deadlineDay'].value,
      EndDate: this.form.controls['endDate'].value,
      StartDate: this.form.controls['startDate'].value,
      SaleTypeCode: this.form.controls['ddlSaleType'].value,
    };

    this.service.addSaleDeadline(saleDeadline);

  }
}
