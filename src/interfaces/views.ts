import { IProduct } from "./products";

export interface INavbarView {
  isLogin: boolean;
  isRegister: boolean;
  menuRef: React.RefObject<HTMLDivElement | null>;
  toggleMenu: () => void;
  menuOpen: boolean;
  cart: IProduct[];
}
