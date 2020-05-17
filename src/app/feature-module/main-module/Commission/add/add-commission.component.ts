import { takeUntil, take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { BaseComponent } from 'src/app/feature-module/base.component';
import { Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-add-commission',
  templateUrl: './add-commission.component.html'
})

export class AddCommissionComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
  }

  onSubmit() {
  }
  }


