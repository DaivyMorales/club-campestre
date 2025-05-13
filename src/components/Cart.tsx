import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useCartStore } from "@/store/cartStore";
import Reservations from "./Reservations";

function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button flex cursor-pointer items-center gap-1 rounded-md border-[1px] border-gray-300 p-2 text-stone-400 shadow-sm"
        >
          <div className="indicator">
            <span className="indicator-item flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-400 text-[10px] font-bold text-white">
              {items.length}
            </span>
            <AiOutlineShoppingCart
              size={20}
              className="cursor-pointer text-stone-400"
            />
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <h2>Tu canasta</h2>

          {items.length === 0 ? (
            <div className="py-8 text-center text-gray-400">
              No hay productos
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 border-b-[1px] border-gray-200 py-3"
              >
                <div className="flex items-center justify-start gap-2">
                  {item.imageUrl && (
                    <img
                      className="h-[68px] w-[68px] rounded-lg"
                      src={item.imageUrl}
                      alt={item.name}
                    />
                  )}
                  <div className="flex flex-col items-start justify-between gap-2">
                    <p>{item.name}</p>
                    <h3>$ {item.price.toLocaleString()}</h3>
                  </div>
                </div>
                <div className="gap flex items-center justify-center rounded-md border-[1px] border-b-[1.7px] border-gray-300">
                  <button
                    className="flex h-[32px] w-[25px] cursor-pointer items-center justify-center rounded-l-md bg-gray-200 p-1"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <h4>-</h4>
                  </button>
                  <div className="flex w-[28px] items-center justify-center">
                    <p className="text-lg">{item.quantity}</p>
                  </div>
                  <button
                    className="flex w-[25px] cursor-pointer items-center justify-center bg-gray-200 p-1"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <h4>+</h4>
                  </button>
                  <button
                    className="flex h-[32px] w-[25px] cursor-pointer items-center justify-center rounded-r-md bg-gray-200 p-1"
                    onClick={() => removeItem(item.id)}
                  >
                    <BsTrash3 size={12} />
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="mt-4 flex w-full  gap-2">
            <button
              className="btn w-[30px] p-2 hover:bg-gray-100"
              onClick={clearCart}
            >
              <BsTrash3 size={18} />
            </button>

            <Reservations total={total} />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
