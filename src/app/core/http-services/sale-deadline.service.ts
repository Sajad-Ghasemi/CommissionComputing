import { SaleDeadlineModel } from './../models/sale-deadline.model';
export class SaleDeadlineService {
  results: SaleDeadlineModel[];

  constructor(){
    //const obj = new SaleDeadlineModel();
    //obj.StartDate = '1399/01/01';
    //obj.EndDate = '1399/01/30';
    //obj.SaleTypeCode = 1;
    //obj.DayDeadline = 1;
    //this.results.push(obj);
  }
  addSaleDeadline(saleDeadline: SaleDeadlineModel)
  {
    const obj = new SaleDeadlineModel();
    obj.StartDate = saleDeadline.StartDate;
    obj.EndDate = saleDeadline.StartDate;
    obj.SaleTypeCode = saleDeadline.SaleTypeCode;
    obj.DayDeadline = saleDeadline.DayDeadline;
    //this.results.push(obj);
  }

  getSaleDeadline(): SaleDeadlineModel[]
  {
      return null;
  }
}
