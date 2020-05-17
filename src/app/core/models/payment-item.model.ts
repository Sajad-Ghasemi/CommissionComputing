export class PaymentItemModel {
  constructor(
      public price: number,
      public paymentDate: string,
      public paymentTypeId: string) {
  }

}
