
export class SaleDeadlineModel {
  constructor(
    public saleTypeCode: number,
    public startDate: string,
    public endDate: string,
    public dayDeadline: number) {
  }
}

