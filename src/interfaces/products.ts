export interface IProductsView {
  category: string;
}

export interface IProduct {
  id: string;
  name: string;
  category: string;
  subcategory: string[];
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export interface IProducts {
  products: IProduct[];
}

export interface IFavorite {
  id: number;
  product: IProduct;
}

export interface IFavorites {
  favorites: IFavorite[];
}

export interface ICart {
  cart: IProduct[];
}

export interface ICards {
  products: IProduct[];
}

export interface ICard {
  product: IProduct;
  favorites: IFavorite[];
  cart: IProduct[];
  handleAddToCart: (product: IProduct) => void;
  handleFavorite: (product: IProduct) => void;
}

export interface ICartContext {
  cart: IProduct[];
  handleAddToCart: (product: IProduct) => void;
  handleGetCart: () => void;
  handleAddQuantity: (product: IProduct) => void;
  handleDeleteProduct: (product: IProduct) => void;
  handleDeleteQuantity: (product: IProduct) => void;
  handleDeleteCart: () => void;
}
