import { IProduct } from "./products";
import { IUserPet, IUserPetAppointment } from "./user";

export interface IMenuItem {
  toggleMenu: () => void;
  menuOpen: boolean;
}

export interface IAddedToCart {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IMenuBurguerItem {
  title: string;
  subItems?: string[];
}

export interface INavbar {
  changeCart?: boolean;
}

export interface IFilters {
  category: string[];
  priceOrder: string;
}

export interface IFiltersComponent {
  toggleCategory: (category: string) => void;
  setPriceOrder: (order: string) => void;
  handleDeleteCategories: () => void;
  handleSeeFilters: () => void;
  subCategories: string[];
  filters: IFilters;
}

export interface ISearchBar {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface ICartProduct {
  product: IProduct;
  handleAddQuantity: (product: IProduct) => void;
  handleDeleteQuantity: (product: IProduct) => void;
}

export interface ICartHeader {
  products: IProduct[];
}

export interface IPetAppointmentForm {
  pet: IUserPet;
  appointments: IUserPetAppointment[];
  setAddAppointment: React.Dispatch<React.SetStateAction<boolean>>;
  setAppointments: React.Dispatch<React.SetStateAction<IUserPetAppointment[]>>;
}
