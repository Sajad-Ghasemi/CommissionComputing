import { PaymentItemModel } from './payment-item.model';
export class CommissionModel{
  constructor(
      public code: number,
      public invoiceNumber: number,
      public invoiceDate: string,
      public paymentItem: PaymentItemModel) {
  }

}
