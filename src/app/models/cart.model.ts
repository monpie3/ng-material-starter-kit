export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: ProductModel[];
}

export interface ProductModel {
  readonly productId: number;
  readonly quantity: number;
}
