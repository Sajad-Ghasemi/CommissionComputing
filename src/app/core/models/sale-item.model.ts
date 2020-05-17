import { SaleListModel } from './sale-list.model';
import { ProductModel } from './product.model';
export class SaleItemModel {
  constructor(
      public price: number,
      public product: ProductModel,
      public saleList: SaleListModel) {
  }
}
