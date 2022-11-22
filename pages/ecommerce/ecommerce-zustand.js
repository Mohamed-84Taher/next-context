import {
  useAddToCart,
  useLogin,
  useLogout,
  useUser,
  useCartCount
} from "./store-zustand";

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
export default function ZustandPage() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
}
