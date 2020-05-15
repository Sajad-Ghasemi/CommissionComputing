import {MatDialog} from '@angular/material/dialog';
import { SaleDeadlineService } from './../../../../core/http-services/sale-deadline.service';
import { BaseComponent } from 'src/app/feature-module/base.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SaleDeadlineModel } from 'src/app/core/models/sale-deadline.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import { AddSaleDeadlineComponent } from '../add/add-sale-deadline.component';

@Component({
    selector: 'app-list-sale-deadline',
    templateUrl: './list-sale-deadline.component.html',
    styleUrls: ['./list-sale-deadline.component.scss']
})
export class ListSaleDeadlineComponent extends BaseComponent implements OnInit {
  constructor(private service: SaleDeadlineService, public dialog: MatDialog) {
     super();
  }
  displayedColumns: string[] = ['position', 'SaleTypeCode', 'StartDate', 'EndDate', 'DayDeadline', 'delete'];
  dataSource = new MatTableDataSource<SaleDeadlineModel>(this.service.getSaleDeadline());

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

   ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add() {
      const dialogRef = this.dialog.open(AddSaleDeadlineComponent, {
        width: '250px',
      });
      dialogRef.afterClosed().subscribe(result => {
        this.dataSource = new MatTableDataSource<SaleDeadlineModel>(this.service.getSaleDeadline());
      });
  }

  delete()
  {

  }
  edit()
  {

  }
}


