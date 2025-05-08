import ToggleComponent from "@/components/ToggleComponent";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ButtonReservation from "@/components/ButtonReservation";
import { breakfast, lunch, bar } from "@/utils/Food";
import { useCartStore } from "@/store/cartStore";

function Home() {
  const addItem = useCartStore((state) => state.addItem);
  const cartItems = useCartStore((state) => state.items);

  // Helper to get quantity in cart for a food id (with section)
  const getQuantity = (section: string, id: string | number) =>
    cartItems.find((item) => item.id === `${section}-${id}`)?.quantity || 0;

  return (
    <div className="flex min-h-[720px] flex-col items-center justify-center py-2">
      <ButtonReservation/>

      {/* Breakfast */}
      <div className="flex flex-col">
        <h3 className="mb-4 text-xl font-bold">Desayunos</h3>
        <div className="mb-10 grid w-[1200px] grid-cols-4 gap-x-10">
          {breakfast.map((item) => (
            <motion.div
              key={`breakfast-${item.id}`}
              whileHover={{ scale: 1.05 }}
              className="flex cursor-pointer items-center justify-between  border-b-[1px] border-gray-200 px-2 py-3 relative"
              onClick={() =>
                addItem({
                  id: `breakfast-${item.id}`,
                  name: item.name,
                  price: item.price,
                  imageUrl: item.imageUrl,
                })
              }
            >
              <div className="justify-betweens flex flex-col items-start gap-4">
                <h4>{item.name}</h4>
                <p className="text-md w-[150px] font-light text-gray-500">
                  {item.description}
                </p>
                <p className="font-semibold">$ {item.price.toLocaleString()}</p>
              </div>
              <div className="relative">
                {item.imageUrl && (
                  <img
                    className="h-[95px] w-[95px] rounded-xl border-[1px] border-gray-200 shadow-xs"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                )}
                {getQuantity("breakfast", item.id) > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold shadow">
                    {getQuantity("breakfast", item.id)}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lunch */}
     <div className="flex flex-col">
     <h3 className="mb-4 text-xl font-bold">Almuerzos</h3>
      <div className="mb-10 grid grid-cols-4 w-[1200px] gap-x-10">
        {lunch.map((item) => (
          <motion.div
            key={`lunch-${item.id}`}
            whileHover={{ scale: 1.05 }}
            className="flex cursor-pointer items-center justify-between border-b-[1px] border-gray-200 py-3 relative"
            onClick={() =>
              addItem({
                id: `lunch-${item.id}`,
                name: item.name,
                price: item.price,
                imageUrl: item.imageUrl,
              })
            }
          >
            <div className="justify-between flex flex-col items-start gap-4">
              <h4>{item.name}</h4>
              <p className="text-sm w-[150px] font-light text-gray-500">
                {item.description}
              </p>
              <h3>$ {item.price.toLocaleString()}</h3>
            </div>
            <div className="relative">
              {item.imageUrl && (
                <img
                  className="h-[120px] w-[120px] rounded-xl"
                  src={item.imageUrl}
                  alt={item.name}
                />
              )}
              {getQuantity("lunch", item.id) > 0 && (
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold shadow">
                  {getQuantity("lunch", item.id)}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
     </div>

      {/* Bar */}
     <div className="flex flex-col">
     <h3 className="mb-4 text-xl font-bold">Bar</h3>
      <div className="grid grid-cols-4 w-[1200px] gap-x-10">
        {bar.map((item) => (
          <motion.div
            key={`bar-${item.id}`}
            whileHover={{ scale: 1.05 }}
            className="flex cursor-pointer items-center justify-center gap-4 border-b-[1px] border-gray-200 py-3 relative"
            onClick={() =>
              addItem({
                id: `bar-${item.id}`,
                name: item.name,
                price: item.price,
                imageUrl: item.imageUrl,
              })
            }
          >
            <div className="justify-betweens flex flex-col items-start gap-4">
              <h4>{item.name}</h4>
              <p className="text-sm w-[100px] font-light text-gray-500">
                {item.description}
              </p>
              <h3>$ {item.price.toLocaleString()}</h3>
            </div>
            <div className="relative">
              {item.imageUrl && (
                <img
                  className="h-[120px] w-[120px] rounded-xl"
                  src={item.imageUrl}
                  alt={item.name}
                />
              )}
              {getQuantity("bar", item.id) > 0 && (
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold shadow">
                  {getQuantity("bar", item.id)}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
     </div>
    </div>
  );
}

export default Home;
