export class ProductModel {
  constructor(
      public code: number,
      public size: string,
      public categoryId: number,
      public productTypeId: number) {
  }
}
