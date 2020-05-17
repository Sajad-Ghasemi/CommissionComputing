import { SaleDeadlineService } from './../../../../core/http-services/sale-deadline.service';
import { BaseComponent } from 'src/app/feature-module/base.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SaleDeadlineModel } from 'src/app/core/models/sale-deadline.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-sale-deadline',
    templateUrl: './add-sale-deadline.component.html'
})
export class AddSaleDeadlineComponent extends BaseComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: SaleDeadlineService, public dialogRef: MatDialogRef<AddSaleDeadlineComponent>) {
    super();
  }
  form: FormGroup;
  ngOnInit(): void {
   this.form = this.fb.group({
      txtStartDate: ['', Validators.required],
      txtEndDate: ['', Validators.required],
      ddlSaleType: ['', Validators.required],
      txtDeadlineDay: ['', Validators.required]
    });
  }
  selectedValue:number;
  onSubmit() {
      const saleDeadline: SaleDeadlineModel = {
      dayDeadline: this.form.controls.txtDeadlineDay.value,
      endDate: this.form.controls.txtEndDate.value,
      startDate: this.form.controls.txtStartDate.value,
      saleTypeCode: this.selectedValue,
    };

      this.service.addSaleDeadline(saleDeadline);
      this.dialogRef.close();
  }
  getSelectedValue(data)
  {
    this.selectedValue = this.clients[data].id;
  }
  clients = [
    { id : 1, clientName: 'نمایشگاهی'},
    { id : 2, clientName: 'نقدی'},
    { id : 3, clientName: 'یک ماهه'},
    { id : 4, clientName: 'دو ماهه'}
  ];
}
