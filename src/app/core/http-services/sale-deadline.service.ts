import { SaleDeadlineModel } from './../models/sale-deadline.model';
export class SaleDeadlineService {
  results: Array<SaleDeadlineModel> = [];

  constructor() {
  }

  addSaleDeadline(saleDeadline: SaleDeadlineModel) {
    const obj: SaleDeadlineModel = {
    startDate: saleDeadline.startDate,
    endDate: saleDeadline.endDate,
    saleTypeCode: saleDeadline.saleTypeCode,
    dayDeadline: saleDeadline.dayDeadline
  };
    this.results.push(obj);
  }

  getSaleDeadline() {
     return this.results.slice();
  }
}
