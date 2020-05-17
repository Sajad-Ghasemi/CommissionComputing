import { SaleItemModel } from './sale-item.model';
import { PreInvoiceModel } from './pre-invoice.model';

export class PreInvoiceItemModel {
  constructor(
      public count: number,
      public preInvoice: PreInvoiceModel,
      public commissionregisterstatusId: number,
      public saleItem: SaleItemModel,
      public discountPercent: number,
      public remainCount: number,
      public description: string) {
  }
}
