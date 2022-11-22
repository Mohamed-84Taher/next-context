import { createContext, useState, useContext } from "react";

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);
  return {
    user,
    cartCount,
    login: () => setUser("taher"),
    logout: () => setUser(""),
    addToCart: () => setCartCount(cartCount + 1)
  };
};
export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};
/* const useStore = create(set => ({
  user: "",
  cartCount: 0,
  login: () => set(() => ({ user: "taher" })),
  logout: () => set(() => ({ user: "" })),
  addToCart: () => set(state => ({ cartCount: state.cartCount + 1 }))
})); */
export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useContext(StoreContext).logout;
export const useAddToCart = () => useContext(StoreContext).addToCart;
export const useUser = () => useContext(StoreContext).user;
export const useCartCount = () => useContext(StoreContext).cartCount;
