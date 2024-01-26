import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShowDetail from "./components/ShowDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import Cart from "./components/Cart";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productId) => {
    console.log(productId);
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className=" animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShowDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>
    </div>
  );
}

export default App;
