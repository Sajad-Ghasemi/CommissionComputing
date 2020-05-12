import { SaleDeadlineModel } from './../models/sale-deadline.model';
export class SaleDeadlineService {
  results: Array<SaleDeadlineModel> = [];

  constructor(){

    const obj: SaleDeadlineModel = {
    StartDate: '1399/01/01',
    EndDate: '1399/01/30',
    SaleTypeCode: 1,
    DayDeadline: 1
    };
    this.results.push(obj);
  }
  addSaleDeadline(saleDeadline: SaleDeadlineModel)
  {
    const obj: SaleDeadlineModel ={
    StartDate: saleDeadline.StartDate,
    EndDate: saleDeadline.StartDate,
    SaleTypeCode: saleDeadline.SaleTypeCode,
    DayDeadline: saleDeadline.DayDeadline
  };
    this.results.push(obj);
  }

  getSaleDeadline()
  {
     return this.results.slice();
  }
}
