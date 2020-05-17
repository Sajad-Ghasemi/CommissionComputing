import { SaleListModel } from './sale-list.model';
export class PreInvoiceModel {
  constructor(
      public code: number,
      public issueDate: string,
      public buyerName: string,
      public discountTypeId: number,
      public discountPercent: number,
      public commissionregisterstatusId: number,
      public requestStatus: number,
      public salelist: SaleListModel,
      public description: string) {
  }
}
