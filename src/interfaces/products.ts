export interface IProductsView {
  category: string;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
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
}
