import { SaleDeadlineModel } from './../models/sale-deadline.model';
export class SaleDeadlineService {
  results: Array<SaleDeadlineModel> = [];

  constructor() {
  }

  addSaleDeadline(saleDeadline: SaleDeadlineModel) {
    const obj: SaleDeadlineModel = {
    StartDate: saleDeadline.StartDate,
    EndDate: saleDeadline.EndDate,
    SaleTypeCode: saleDeadline.SaleTypeCode,
    DayDeadline: saleDeadline.DayDeadline
  };
    this.results.push(obj);
  }

  getSaleDeadline() {
     return this.results.slice();
  }
}
