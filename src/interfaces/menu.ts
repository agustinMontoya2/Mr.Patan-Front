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
