import { takeUntil, take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { BaseComponent } from 'src/app/feature-module/base.component';
import { Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html'
})

export class SearchableDropdownComponent extends BaseComponent implements OnInit {


//@Input() items: any[];
//@Input() formControl: FormControl;
//@Input() placeholder: string;
//@Input() placeholderLabel: string;
//@Input() noEntriesFoundLabel: string;

 items: any[] = [
  "ابراهیمی",
  "سیستان",
  "سیمیاران"
];

  /** control for the selected bank for multi-selection */
  public control: FormControl = new FormControl();

  private _onDestroy = new Subject<void>();
  public filteredRecords: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('Select', {static: true}) select: MatSelect;

  ngOnInit() {
    this.setInitialValue();
    // set initial selection
    this.control.setValue([]);
    // load the initial bank list
    this.filteredRecords.next(this.items.slice());

    this.control.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti();
      });
  }

  private setInitialValue() {
    this.filteredRecords
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.select.compareWith = (a: any, b: any) => a === b;
      });
  }

  private filterBanksMulti() {
    if (!this.items) {
      return;
    }
    // get the search keyword
    let search = this.control.value;
    if (!search) {
      this.filteredRecords.next(this.items.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    if (search.length >= 3) {
    // filter the banks
     this.filteredRecords.next(
      this.items.filter(item => item.toLowerCase().indexOf(search) > -1)
     );
    }
  }

}
