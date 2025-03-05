export interface IMenuItem {
  toggleMenu: () => void;
  menuOpen: boolean;
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
