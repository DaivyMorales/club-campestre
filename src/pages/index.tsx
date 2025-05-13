import ToggleComponent from "@/components/ToggleComponent";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ButtonReservation from "@/components/ButtonReservation";
import { useCartStore } from "@/store/cartStore";
import ButtonExpandReservation from "@/components/ButtonExpandReservation";

function Home() {
  const addItem = useCartStore((state) => state.addItem);
  const cartItems = useCartStore((state) => state.items);
  const [categories, setCategories] = useState<Record<string, any[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Helper to get quantity in cart for a food id (with section)
  const getQuantity = (section: string, id: string | number) =>
    cartItems.find((item) => item.id === `${section}-${id}`)?.quantity || 0;

  // Fetch items from the API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/item");
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching items:", err);
        setError("Failed to load items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[720px] flex-col items-center justify-center py-2">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg"></div>
          <p className="mt-4">Loading items...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[720px] flex-col items-center justify-center py-2">
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button
            className="btn btn-sm btn-outline mt-4"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[720px] flex-col items-center justify-center py-2">
      <div className="flex gap-1">
        <ButtonReservation />
        {/* <ButtonExpandReservation /> */}
      </div>

      {/* Render each category */}
      {Object.entries(categories).map(([categoryName, items]) => (
        <div key={categoryName} className="flex flex-col">
          <h3 className="mb-4 text-xl font-bold">{categoryName}</h3>
          <div className="mb-10 grid w-[1200px] grid-cols-4 gap-x-10">
            {items.map((item) => (
              <motion.div
                key={`${categoryName}-${item.id}`}
                whileHover={{ scale: 1.05 }}
                className="relative flex cursor-pointer items-center justify-between border-b-[1px] border-gray-200 px-2 py-3"
                onClick={() =>
                  addItem({
                    id: `${categoryName}-${item.id}`,
                    name: item.name,
                    price: parseFloat(item.price),
                    imageUrl: item.imageUrl,
                  })
                }
              >
                <div className="justify-betweens flex flex-col items-start gap-4">
                  <h4>{item.name}</h4>
                  <p className="text-md w-[150px] font-light text-gray-500">
                    {item.description}
                  </p>
                  <p className="font-semibold">
                    $ {parseFloat(item.price).toLocaleString()}
                  </p>
                </div>
                <div className="relative">
                  {item.imageUrl && (
                    <img
                      className="h-[95px] w-[95px] rounded-xl border-[1px] border-gray-200 shadow-xs"
                      src={item.imageUrl}
                      alt={item.name}
                    />
                  )}
                  {getQuantity(categoryName, item.id) > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white shadow">
                      {getQuantity(categoryName, item.id)}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
