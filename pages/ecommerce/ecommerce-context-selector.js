import {
  StoreContextProvider,
  useAddToCart,
  useCartCount,
  useLogin,
  useLogout,
  useUser
} from "./store-context-selector";

function LoginSection() {
  const login = useLogin();
  const logout = useLogout();
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
function UserSection() {
  const user = useUser();
  return <div>User : {user}</div>;
}
function AddToCartSection() {
  const addToCart = useAddToCart();
  return (
    <div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
function CartCountSection() {
  const cartCount = useCartCount();
  return <div>Cart : {cartCount} :</div>;
}
function ContextPage() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
}
export default function ContextPageProvider() {
  return (
    <StoreContextProvider>
      <ContextPage />
    </StoreContextProvider>
  );
}
